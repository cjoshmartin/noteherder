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
 this.handleNewNote = this.handleNewNote.bind(this)
 this.handleDelete = this.handleDelete.bind(this)
  } // end of constructor

  handleNote (noteChange){
    // console.log(noteChange)
    this.setState({currentNote:noteChange})
  }
  handleNewNote(note){
    //  CAN't not append to the current array
    const notesLength = Object.keys(this.state.notes).length
    const noteName = 'note-' + (notesLength+1)
    console.log(note)
    const newState = {...this.state}
    newState.notes[note.id]=note
    this.setState(newState)
  }
handleDelete(note)
{
  const newState = {...this.state}
  delete newState.notes[this.state.currentNote]
  newState.currentNote =''
  this.setState(newState)
}
  render() {
    let content = null;
    var id = this.state.currentNote
    var notes = this.state.notes
    let currentNote = notes[id]
    console.log(currentNote && currentNote.title)
    if(id !== '')
    {
      content =(
        <div>
            <button type="button" style={{border: "none",background: "none",padding: 0}} onClick={this.handleDelete}>
            <i className="fa fa-trash-o" style={{color: "#999",fontSize: "2rem", margin: 0}} />
          </button>
         <div className="note"  style={{marginLeft:"31rem" , maxWidth: "80rem" }}>
           
           <div className="note-title">
             <h1>
            {currentNote.title}  
            </h1>
             </div>
             <div className="note-body">
               <p>
               {currentNote.body} 
                </p>
               </div>
           </div> 
          </div>
      )
    }
    else{

     content= <NoteForm notes={this.state.notes} onFormSubmit={this.handleNewNote}/>
    }
    return (
      <div className="Main">
        <Sidebar />
      <NoteList notes={this.state.notes} onNoteChange={this.handleNote} />
      {content}
      </div>
    );
  }
}

export default App
