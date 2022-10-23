import React from 'react'
import { useState } from 'react'
import TaskDetail from './task-detail/TaskDetal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function Table(props) {
    const [showModal, setShowModal] = useState(false);
    const gI = props.gI;
    const item = props.item;
    const index = props.index;
    const handleDragStart = props.handleDragStart;
    const handleDragEnter = props.handleDragEnter;
    const removeTask = props.removeTask;
    const dragging = props.dragging;
    const setList = props.setList;
    console.log(showModal)
    return (
        <div 
            className='dnd-item' 
            draggable 
            onDragStart={(e) => handleDragStart(e,{gI, index})}
            onDragEnter={dragging?(e) => {handleDragEnter(e,{gI, index})}:null} 
            
            key={index}
        >
            <p>
                {item}
            </p>
            <FontAwesomeIcon 
                className="dnd-item__pen" 
                icon={faPenToSquare} 
                onClick={() => setShowModal(true)}
            />
            
            {showModal ? 
                <TaskDetail
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

