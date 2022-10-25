import React from 'react'
import { useState } from 'react'
import TaskDetail from './task-detail/TaskDetal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function Table(props) {
    const [showModal, setShowModal] = useState(false);
    const {gI,gName,item,index,handleDragStart,handleDragEnter,dragging,removeTask,setList} = props

    console.log(showModal)
    return (
        <div 
            className='dnd-item' 
            draggable 
            onDragStart={(e) => handleDragStart(e,{gI, index})}
            onDragEnter={dragging?(e) => {handleDragEnter(e,{gI, index})}:null} 
            
            key={index}
        >
            <p className='dnd-item__title'>
                {item}
            </p>
            <FontAwesomeIcon 
                className="dnd-item__pen" 
                icon={faPenToSquare} 
                onClick={() => setShowModal(true)}
            />
            
            {showModal ? 
                <TaskDetail
                    gName = {gName}
                    item = {item}
                    setShowModal = {setShowModal}
                    setList = {setList}
                    gI = {gI}
                    index = {index}
                /> 
                : 
                null
                }
            {/* <button onClick={() => setShowModal(true)}>View</button> */}
            {/* <button onClick={() => removeTask(gI,index)}>remove task</button> */}
        </div>
    )
}

