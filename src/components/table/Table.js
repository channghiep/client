import React from 'react'
import { useState } from 'react'
import Task from '../board/task/Task';

export default function Table(props) {
    const [showModal, setShowModal] = useState(false);
    const gI = props.gI;
    const item = props.item;
    const index = props.index;
    const handleDragStart = props.handleDragStart;
    const handleDragEnter = props.handleDragEnter;
    const removeTask = props.removeTask;
    const dragging = props.dragging;
    console.log(item)
    return (
        <div 
            className='dnd-item' 
            draggable 
            onDragStart={(e) => handleDragStart(e,{gI, index})}
            onDragEnter={dragging?(e) => {handleDragEnter(e,{gI, index})}:null} 
            key={index}
        >
            {/* <button onClick={createList}>click</button> */}
            {item}
            {showModal ? 
                <Task
                    item = {item}
                    setShowModal = {setShowModal}
                /> 
                : 
                <p>No hello</p>}
            <button onClick={() => setShowModal(true)}>View</button>
            <button onClick={() => removeTask(gI,index)}>remove task</button>
        </div>
    )
}

