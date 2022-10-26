import React, { useState } from 'react';
import { useRef } from 'react';
import Task from './task/Task';
import "./Board.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faelli } from '@fortawesome/free-regular-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'


export default function Board (props) {
// const [list, setList] = useState(Task)

const list = props.list;
// const [list, setList] = useState(list1)
console.log(list)
const setList = props.setList;
const [dragging, setDragging] = useState(false)
const dragItem = useRef();
const dragNode = useRef();
const [addingList, setAddingList] = useState(false)
const [newAddedList, setAddedNewList] = useState()

    // onDragOver = (e) => {
    //     e.preventDefault();
    // }

const createList = () => {
    setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        console.log(typeof newList);
        const addtionObj = {
        name: newAddedList,
        items: [],
        };
        newList.splice(newList.length, 0, addtionObj);
        return newList;
    });
    setAddedNewList("")
    setAddingList(false)
};
const handleDragStart = (e, params) =>{
    console.log("Drag start", params)
    // let test = params
    dragItem.current = params
    // console.log(test)
    // console.log(dragItem.current)
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd)

    setDragging(true)
}

const handleDragEnd = () => {
    console.log("End Drag");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;

}

const handleDragEnter = (e, params) => {
    console.log("Drag Enter", params)
    const currentItem = dragItem.current
    if (e.target !== dragNode.current){
        console.log("Different Target")
        setList(oldList =>{
            console.log(oldList)
            let newList = JSON.parse(JSON.stringify(oldList))
            console.log(typeof(newList))
            let selectedItem = newList[currentItem.gI].items[dragItem.current.index]
            // console.log(selectedItem)
            // newList[params.gI].items.splice(dragItem.current.index,1)
            // console.log(newList)
            // console.log(params.index)
            // newList[params.gI].items.splice(params.index, 0, selectedItem)
            // console.log(newList)
            // console.log(currentItem.index)
            // console.log(newList[currentItem.gI].items.splice(currentItem.index,1))
            newList[params.gI].items.splice(params.index,0, newList[currentItem.gI].items.splice(currentItem.index,1)[0])
            dragItem.current  = params
            return newList
        })
    }
}

const removeTable = (gI) => {
    setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList))
        console.log(typeof(newList))
        newList.splice(gI,1)
        return newList;
    })
}

const removeTask = (gI, index) => {
    console.log(gI)
    setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList));
        console.log(newList[gI]);
        newList[gI].items.splice(index,1);
        return newList;
    })
}

const createTask = (gI) =>{
    setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList));
        console.log(newList[gI].items);
        newList[gI].items.splice(newList[gI].items.length,0,"new");
        return newList;
    })
}

const onAddingList = () => {
    setAddingList(true)
}

return (
    <div className='board'>       
        {list.map((group, gI)=>(
            <div 
                className='dnd-group'
                key={gI}
                onDragEnter={dragging && !group.items.length?(e) =>{handleDragEnter(e, {gI, index:0})}:null}
            >
                <div className="dnd-group__header">
                    <p>{group.name}</p>
                    <FontAwesomeIcon 
                        className='header__dots'
                        onClick={() => removeTable(gI)}
                        icon={faEllipsis} 
                    />

                </div>
                {group.items.map((item, index)=>(
                    // <div 
                    //     className='dnd-item' 
                    //     draggable 
                    //     onDragStart={(e) => handleDragStart(e,{gI, index})}
                    //     onDragEnter={dragging?(e) => {handleDragEnter(e,{gI, index})}:null} 
                    //     key={index}
                    // >
                    //     {/* <button onClick={createList}>click</button> */}
                    //     {item}
                    //     <button onClick={() => setShow(true)}>View</button>
                    //     <button onClick={() => removeTask(gI,index)}>remove task</button>
                    // </div>
                    <Task
                        gI = {gI}
                        gName = {group.name}
                        item = {item}
                        index = {index}
                        handleDragStart = {handleDragStart}
                        handleDragEnter = {handleDragEnter}
                        removeTask = {removeTask}
                        dragging = {dragging}
                        setList = {setList}
                    />
                ))}
                <div className='dnd-group__create-task' onClick={() => createTask(gI)}>+ &nbsp; Add a task</div>
            </div>
        ))}
        {/* <div className="board__create-list" onClick={() => {props.createList()}}>+ &nbsp;Add another list</div> */}
        {addingList ?
            (<div className="board__create-list">
                <input onChange={(e) => {setAddedNewList(e.target.value)}}/>
                <div onClick={() => createList()}>Save</div>
            </div>
            ) : 
            (<div className="board__create-list" onClick={() => onAddingList()}>+ &nbsp;Add another list</div>)
            
        }
    </div>
)
}
