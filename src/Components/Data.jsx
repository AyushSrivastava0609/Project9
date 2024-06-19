import React from 'react'

export default function Data({ToDoList,removeFromToDoList}) {
    
    let list=ToDoList.map((item,index)=><li key={index}><input className='but1' type='checkbox'></input><button className='but' onClick={() => removeFromToDoList(index)}>🗑️</button>{item}</li>)
    if (list.length > 13) {
      return (
          <div className='datalist'>
              <h2>&#160;&#160;&#160;To-Do List :- </h2>
              <p style={{ color: 'red' }}>Error: Too many items in the list.</p>
          </div>
      );
  }
  return (
    <div className='datalist'>
        <h2>&#160;&#160;&#160;To-Do List :- </h2>
      <ul>
      {list}
      </ul>
    </div>
  )
}
