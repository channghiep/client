import React from 'react'
import { useState } from 'react';
import "./TaskDetail.css"

export default function Task(props) {
  const [taskDescription, setTaskDescription] = useState(props.item)
  const setList = props.setList;
  const gI = props.gI;
  const index = props.index;

  const saveEditedTask = () => {
    setList(oldList => {
      let newList = JSON.parse(JSON.stringify(oldList));
      console.log(taskDescription)
      console.log(newList[gI].items[index])
      newList[gI].items[index] = taskDescription;
      console.log(newList)
      return newList;
    })
  }
  
  const onEdittingText = (e) => {
    // e.prevenDefault();
    console.log(e.target.innerHTML)
    
    setTaskDescription(e.target.innerHTML)
  }
  return (
    <div className='task-modal'>
      <div className="task-modal-inner">
        <p contentEditable={true} onInput={onEdittingText}>{taskDescription}</p>
        <button onClick={() => saveEditedTask()}>Save</button>
        <button onClick={() => {props.setShowModal(false)}}>Close</button>
      </div>
    </div>
  )
}
