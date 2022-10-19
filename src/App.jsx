import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { useEffect, useState } from 'react';
import Board from './components/board/Board';

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

function App() {

  const [list, setList] = useState([]);
  const [selectedTable, setSelectedTable] = useState();
  useEffect(() => {
    setTimeout(() =>{
      setList(Task)
    },1000)
  },[])

  const createList = () => {
    setList(oldList => {
          let newList = JSON.parse(JSON.stringify(oldList))
          console.log(typeof(newList))
          const addtionObj = {
              name:"group new",
              items:[]
          };
          newList.splice(newList.length,0,addtionObj)
          return newList;
    })
  }

  // const removeList = (selectedTable) => {
    
  // }
  return (
    <div>
      <Board list={list} setList={setList}/>
      <button onClick={createList} >Add Table</button>
    </div>
  );
}

export default App;
