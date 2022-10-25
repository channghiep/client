import React from 'react'
import { useState } from 'react';
import "./TaskDetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowMaximize, faList, faComment, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Task(props) {
  const {gI, gName, index, item, setList } = props
  const [taskDescription, setTaskDescription] = useState("a")
  const [editting, setEditing] = useState(false)
  // const setList = props.setList;
  // const gI = props.gI;
  // const index = props.index;
  console.log(taskDescription.length)
  const saveEditedTask = () => {
    setList(oldList => {
      let newList = JSON.parse(JSON.stringify(oldList));
      console.log(taskDescription)
      console.log(newList[gI].items[index])
      newList[gI].items[index] = taskDescription;
      console.log(newList)
      return newList;
    })
    setEditing(false)
  }
  
  const onChangeDescription = (e) => {
    // e.prevenDefault();
    
    if(e.target.value.length>0){
      setTaskDescription(e.target.value)
    }
  }
  return (
    <div className='task-modal'>
      <div className="task-modal-inner">
        <div className="modal-inner__header">
          <div className="__legend __wrapper">
            <p className='header__title __title'>
              <FontAwesomeIcon icon={faWindowMaximize} />
              <span>
                Task title
              </span>
            </p>
            <FontAwesomeIcon className='header__xmark __mark' onClick={() => {props.setShowModal(false)}} icon={faXmark} />
          </div>
          <p className='__track'>in table {gName}</p>
        </div>
        <div className="model-inner__description __legend">
          <p className='__title'>
            <FontAwesomeIcon icon={faList} />
            <span>
              Description
            </span>
          </p>
          {editting ?
          (<>
            <textarea 
              className='__description__editting' 
              value= {taskDescription}
              placeholder="Write something ..."
              onChange={(e) => onChangeDescription(e)}
              ></textarea>
              <div className='__editing__conf'>
                <div onClick={() => saveEditedTask()}>Save</div>
                <div onClick={() => setEditing(false)}>Cancel</div>
              </div>
            </>
          )
          :(
            <p onClick={() => setEditing(true)}>{taskDescription}</p>
          )
          }
          
          
        </div>
        <div className="model-inner__comment __legend">
          <p className='__title'>
            <FontAwesomeIcon icon={faComment} />
            <span>
              Comment
            </span>
          </p>
          <p>Write a comment</p>
        </div>
      </div>
    </div>
  )
}
