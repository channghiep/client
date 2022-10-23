import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useState } from "react";
import Board from "./components/board/Board";
import DashBoard from "./components/dashboard/DashBoard";
import MainContent from "./components/main-content/MainContent";
import "./App.css"

const Task = [
  {
    name: "group1",
    items: ["a", "b", "c"],
  },
  {
    name: "group2",
    items: ["d", "e"],
  },
];

const Task2 = [
  {
    boardName: "project1",
    active: true,
    board: [
      {
        name: "group1",
        items: ["a", "b", "c"],
      },
      {
        name: "group2",
        items: ["d", "e"],
      },
    ],
  },

  {
    boardName: "project2",
    active: false,
    board: [
      {
        name: "group3",
        items: ["f", "g", "h"],
      },
      {
        name: "group4",
        items: ["i", "j"],
      },
    ],
  },
];

function App() {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState();

  useEffect(() => {
    (async () => {
      await setTimeout(() => {
        // setList(Task)
        // setList2(Task2[0].board)
        setList2(Task2);
        console.log(list2);
        if (list2.length != 0) {
          console.log("no");
          setSelectedBoard(list2[0].board);
        }
      }, 1000);
    })();
  }, []);

  // useEffect(() =>{

  // },[list2])

  

  // const removeList = (selectedTable) => {

  // }
  // console.log(list2)
  // console.log(selectedBoard)
  const onChangeBoard = (bI) => {
    console.log(bI);
    setSelectedBoard(list2[bI].board);
  };

  const addProject = () => {
    setList2((oldList) => {
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

  const removeProject = (bI) => {
    setList2((oldList) => {
      let newList = JSON.parse(JSON.stringify(oldList));
      newList[bI].active = false;

      return newList;
    });
  };
  console.log(list2);
  return (
    <div className="kanban">
      <div className="kanban__inner">
        <div className="kanban__dashboard">
          <DashBoard 
            boardList = {list2}
            onChangeBoard = {onChangeBoard}
            removeProject = {removeProject}
          />
        </div>
        <div className="kanban__main-content">
          <MainContent 
            selectedBoard = {selectedBoard}
            setSelectedBoard = {setSelectedBoard}
            // createList
          />
        </div>
        {/* <div>DashBoard
          <button onClick = {addProject}>Add Project</button>
          {list2 !== undefined ?
          
          (<ul>
            
            {list2.length > 0 ? (
            list2.map((boardContainer, bI) =>(
              boardContainer.active ?
              
              <li key={bI} onClick={(e) => onChangeBoard(bI)}>{boardContainer.boardName}
                <button onClick={(e) => removeProject(bI)}> Remove Project</button>
              </li>
              :
                null
              
            ))
            )
            :"emty"
          }
          </ul>) : "emty"
        }
        </div> */}
        {/* <div>Main
          <div>
            {selectedBoard?
            <>
              <Board list={selectedBoard} setList={setSelectedBoard}/>
              <button onClick={createList} >Add Table</button>
            </>
            :null}
          </div>
        </div>
        <div>Deactivated Project
        {list2.map((boardContainer, bI) =>(
              !boardContainer.active ?
              
              <li key={bI}>{boardContainer.boardName}
              <button>Activate project</button>
              </li>
              // <button onClick={(e) => removeProject(bI)}> Remove Project</button>
              :
                null
              
            ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;
