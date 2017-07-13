import React, { Component } from 'react'
import dataBase, { auth } from './dataBase'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes:  {},
      uid: null,
      firebaseNotesSynced: false,
    }
  }

  componentWillMount = () => {
    this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          // signed in
          this.handleAuth(user)
        } else {
          // signed out
          this.handleUnauth()
        }
      }
    )
  }

  getUserFromLocalStorage = () => {
    const uid = localStorage.getItem('uid')
    if (!uid) return
    this.setState({ uid })
  }

  syncNotes = () => {
    this.bindingRef = dataBase.syncState(
      `notes/${this.state.uid}`,
      {
        context: this,  // what object the state is on
        state: 'notes', // which property to sync
        then: () => this.setState({ firebaseNotesSynced: true })
      }
    )
  }

  saveNote = (note) => {
    let shouldRedirect = false

    if (!note.id) {
      note.id = Date.now()
      shouldRedirect = true
    }

    note.date = new Date().getTime()

    const notes = {...this.state.notes}
    notes[note.id] = note

    // let reSort = Object.values(notes) //  object ==> array
    //
    // reSort.sort((a,b)=>{ // sorts by date
    //   return b.date - a.date
    // })
    // reSort.reduce((result,item) =>{ //  array ==> object && adds back Id as key
    //   result[item.id] = item
    //   return result
    // },{})


    this.setState({ notes })

    if (shouldRedirect) {
      this.props.history.push(`/notes/${note.id}`)
    }
  }

  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null

    this.setState({ notes })
    this.props.history.replace('/notes')
  }

  signedIn = () => {
    return this.state.uid
  }

  handleAuth = (user) => {
    localStorage.setItem('uid', user.uid)
    this.setState(
      { uid: user.uid },
      this.syncNotes
    )
  }

  handleUnauth = () => {
    localStorage.removeItem('uid')

    if (this.bindingRef) {
      dataBase.removeBinding(this.bindingRef)
    }

    this.setState({
      uid: null,
      notes: {},
    })
  }

  signOut = () => {
    auth.signOut()
  }

  render() {
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      signOut: this.signOut,
    }

    return (
      <div className="App">
        <Switch>
          <Route
            path="/sign-in"
            render={() => (
              this.signedIn()
                ? <Redirect to="/notes" />
                : <SignIn />
            )}
          />
          <Route
            path="/notes"
            render={() => (
              this.signedIn()
                ? <Main
                    {...actions}
                    notes={this.state.notes}
                    firebaseNotesSynced={this.state.firebaseNotesSynced}
                  />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route render={() => (
            this.signedIn()
              ? <Redirect to="/notes" />
              : <Redirect to="/sign-in" />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
