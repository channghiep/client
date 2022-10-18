import React, { useState } from 'react';
import { useRef } from 'react';
import "../Board.css"

const Task = [
    {
        name: "group1",
        items: ["a","b","c"]
    },
    {
        name: "group2",
        items: ["d","e"]
    }
]
export default function () {
const [list, setList] = useState(Task)
const [dragging, setDragging] = useState(false)
const dragItem = useRef();
const dragNode = useRef();

    // onDragOver = (e) => {
    //     e.preventDefault();
    // }
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
    console.log("End Drag")
    setDragging(false)
}

const handleDragEnter = (e, params) => {
    console.log("Drag Enter", params)
    const currentItem = dragItem.current
    if (e.target !== dragNode.current){
        console.log("Different Target")
        setList(oldList =>{
            console.log(oldList)
            let newList = JSON.parse(JSON.stringify(oldList))
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

return (
    <div className='board'>

            {list.map((group, gI)=>(
                <div 
                    className='dnd-group'
                    key={gI}
                    onDragEnter={dragging && !group.items.length?(e) =>{handleDragEnter(e, {gI, index:0})}:null}
                >
                    {group.items.map((item, index)=>(
                        <div 
                            draggable 
                            onDragStart={(e) => handleDragStart(e,{gI, index})}
                            onDragEnter={dragging?(e) => {handleDragEnter(e,{gI, index})}:null} 
                            className='dnd-item' 
                            key={index}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            ))}

    </div>
)
}
