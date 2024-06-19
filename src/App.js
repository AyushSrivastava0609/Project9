import React , {useState} from 'react'
import './App.css';
import UserInput from './Components/UserInput';
import Data from './Components/Data';
export default function App() {
  const [ToDoList,setToDoList]=useState([]);
  function addToToDoList(ToDo){
    setToDoList([...ToDoList,ToDo]);
  }
  function clearToDoList(){
    setToDoList([]);
  }
  function removeFromToDoList(index) {
    const newToDoList = [...ToDoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
}
  return (
    <div className='ToDoList'>
      <UserInput addToToDoList={addToToDoList} clearToDoList={clearToDoList}/>
      <Data ToDoList={ToDoList} removeFromToDoList={removeFromToDoList}/>
    </div>
  )
}
