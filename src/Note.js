import React from 'react'
import { NavLink } from 'react-router-dom'

import moment from 'moment'

const Note = ({ note }) => {

  return (
    <NavLink to={`/notes/${note.id}`}>
      <li>
        <div className="note">
          <div className="note-title">
            {note.title}
          </div>
          <div class="updated-note">
            <small>Last updated {moment(note.date,'x').fromNow()}</small>
          </div>
          <div
            className="note-body"
            dangerouslySetInnerHTML={{ __html: note.body }}
          ></div>
        </div>
      </li>
    </NavLink>
  )
}

export default Note
