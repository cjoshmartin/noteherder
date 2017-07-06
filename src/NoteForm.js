import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(ev){
    ev.preventDefault()
    // this.props.onFormSubmit()
    const notesLength = Object.keys(this.props.notes).length
    const noteName = 'note-' + (notesLength+1)
    const newObjec= {
      id: noteName,
      title: ev.target.title.value,
      body: ev.target.body.value,
    }
    this.props.onFormSubmit(newObjec)
  }
  render() {
    return (
      <div className="NoteForm">
        {console.log(this.props)}
        <div className="form-actions">
          <button type="button">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
            />
          
          <textarea name="body"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
