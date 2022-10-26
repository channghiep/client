import React from 'react'
import { useState } from 'react';
import "./TaskDetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowMaximize, faList, faComment, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Task(props) {
  const {gI, gName, index, item, setList } = props
  const [taskDescription, setTaskDescription] = useState(item)
  const [editting, setEditing] = useState(false)
  // const setList = props.setList;
  // const gI = props.gI;
  // const index = props.index;
  console.log(taskDescription)
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
        <div className="model-inner__description ">
          <div className='__legend'>
            <p className='__title'>
              <FontAwesomeIcon icon={faList} />
              <span>
                Description
              </span>
            </p>
          </div>
          {editting ?
          (<>
            <textarea 
              className='__description__editting' 
              placeholder="Write something ..."
              onChange={(e) => onChangeDescription(e)}
              >{taskDescription}</textarea>
              <div className='__editing__conf'>
                <div onClick={() => saveEditedTask()}>Save</div>
                <div onClick={() => setEditing(false)}>Cancel</div>
              </div>
            </>
          )
          :(
            <p className='__description' onClick={() => setEditing(true)}>{taskDescription}</p>
          )
          }   
        </div>
        <div className="model-inner__comment ">
          <div className='__legend'>
            <p className='__title'>
              <FontAwesomeIcon icon={faComment} />
              <span>
                Comment
              </span>
            </p>         
          </div>
          <p>Write a comment</p>
        </div>
      </div>
    </div>
  )
}
