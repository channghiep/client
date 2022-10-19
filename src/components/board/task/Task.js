import React from 'react'
import "./Task.css"

export default function Task(props) {
  console.log(props.item)
  return (
    <div className='task-modal'>
      <div className="task-modal-inner">
        {props.item}
        <button onClick={() => {props.setShowModal(false)}}>Close</button>
      </div>
    </div>
  )
}
