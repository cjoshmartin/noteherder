import React, { Component } from 'react'

import './App.css'
import Main from './Main'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'My fancy note from App',
          body: 'This note is so fancy!',
        },
        'note-2': {
          id: 'note-2',
          title: 'Another one from App',
          body: 'Also very fancy',
        },
      },
     currentNote: "", 
    } // end of state 
 this.handleNote = this.handleNote.bind(this)
  } // end of constructor

  handleNote (noteChange){
    this.setState({currentNote:noteChange})
  }
  render() {
    return (
      <div className="Main">
        <Sidebar />
      <NoteList notes={this.state.notes} />
      <NoteForm notes={this.state.notes} />
      </div>
    );
  }
}

export default App
