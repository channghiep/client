import React from 'react'
import Board from '../board/Board';

import "./MainContent.css"

export default function MainContent(props) {
  const {selectedBoard, setSelectedBoard} = props
  
  return (
    <div className="maincontent">
      {selectedBoard?
        <div className="maincontent__board">
          <Board list={selectedBoard} setList={setSelectedBoard}/>
          {/* <button onClick={createList} >Add List</button> */}

        </div>
            :null}
    </div>
  )
}
