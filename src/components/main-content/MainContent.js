import React from 'react'
import Board from '../board/Board';

import "./MainContent.css"

export default function MainContent(props) {
  const {selectedBoard, setSelectedBoard} = props
  const createList = () => {
    setSelectedBoard((oldList) => {
      let newList = JSON.parse(JSON.stringify(oldList));
      console.log(typeof newList);
      const addtionObj = {
        name: "group new",
        items: [],
      };
      newList.splice(newList.length, 0, addtionObj);
      return newList;
    });
  };
  return (
    <div className="maincontent">
      {selectedBoard?
        <div className="maincontent__board">
          <Board list={selectedBoard} setList={setSelectedBoard} createList={createList}/>
          {/* <button onClick={createList} >Add List</button> */}

        </div>
            :null}
    </div>
  )
}
