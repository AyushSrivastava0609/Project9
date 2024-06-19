import React,{ useState } from 'react'

export default function UserInput({addToToDoList , clearToDoList}) {
    const [ToDo,setToDo]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(ToDo.length!=0){
            addToToDoList(ToDo);
        }else{
            return ''
        }
       setToDo('');
    }
    function handleChange(e){
        e.preventDefault();
       setToDo(e.target.value);
    }
    function handleClear(e){
         e.preventDefault();
         clearToDoList();
    }
    return (
        <>
            <div className='user'>
                <form onSubmit={handleSubmit} className='inpt'>
                    <label htmlFor='ToDo'>Task : </label>
                    <input type='text' id='ToDo' value={ToDo} onChange={handleChange}/>
                    <button className='btn'>Add</button>
                    <button className='btn' onClick={handleClear}>Clear</button>
                </form>
            </div>

        </>
    )
}

