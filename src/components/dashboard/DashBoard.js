import React from "react";
import './DashBoard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faelli } from '@fortawesome/free-regular-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

export default function DashBoard(props) {
  const {boardList, onChangeBoard, removeProject, setList}= props
  //Create new project
  const addProject = () => {
    setList((oldList) => {
      let newList = JSON.parse(JSON.stringify(oldList));
      const addedProject = {
        boardName: "new project",
        board: [],
        active: true,
      };
      newList.splice(newList.length, 0, addedProject);
      return newList;
    });
  };
  //This will check if you have active board or not
  const verifyBoard = (boardList) => {
    for(let i=0;i<boardList.length;i++){
      if(boardList[i].active == true){
        return true
      }else{
        return false
      }
    }
  }
  return (
    <div className="dashboard">
      <div className="dashboard__your-board">
        <div className="your-board__header">
          <p>Your board</p>
          <FontAwesomeIcon 
            className='__plus'
            icon={faPlus}
            onClick={() => {addProject()}} 
          />
        </div>
        {/* This will check if the board is exist or not, if not will dis play create board */}
        {boardList !== undefined && boardList.length >0 ?
            (
              verifyBoard(boardList) ? (
                <ul className="your-board__list">
                {boardList.map((boardContainer, boardIndex) =>(
                  boardContainer.active ?
                    <li
                      className="your-board__list-name"
                      key={boardIndex} 
                      onClick={() => onChangeBoard(boardIndex)}
                    >
                      {boardContainer.boardName}
                      <button 
                        onClick={() => removeProject(boardIndex)}
                      >
                        Remove Project
                      </button>
                    </li>
                  :
                    null             
                ))}
              </ul>
              )
              :
              (<p>You don't have any active board</p>)             
            )
            : 
            (
              <p>Create a new board</p>
            )
        }

      </div>
      {/* <div className="dashboard__inactive-board">

      </div> */}
    </div>
  );
}
