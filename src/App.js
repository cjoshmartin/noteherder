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
     currentNote: '', 
    } // end of state 
 this.handleNote = this.handleNote.bind(this)
  } // end of constructor

  handleNote (noteChange){
    this.setState({currentNote:noteChange})
  }
  notesView(props){

  }
  render() {
    // console.log("I CAN REVICE THE TACOS OUT HERE!")
    let content = null;
    var id = this.state.currentNote
    var notes = this.state.notes
    let currentNote = notes[id]

    if(id !== '')
    {
      // console.log(this.state.currentNote)
      // console.log("GIVE ME TACOS")
      content =(
        <div>
         <div className="note">
           <div className="note-title">
             THIS IS THE TITLE
             </div>
             <div className="note-body">
               <p>
                THIS IS THE THE BODY OF THIS 
                </p>
               </div>
           </div> 
          </div>
      )
    }
    else{

     content= <NoteForm notes={this.state.notes} />
    }
    return (
      <div className="Main">
        <Sidebar />
      <NoteList notes={this.state.notes} onNoteChange={this.handleNote}/>
      {content}
      </div>
    );
  }
}

export default App
