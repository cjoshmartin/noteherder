import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

// function 

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList notes={props.notes.notes} onNote />
      <NoteForm notes={props.notes} />
      {console.log(props)}
    </div>
  )
}

export default Main
