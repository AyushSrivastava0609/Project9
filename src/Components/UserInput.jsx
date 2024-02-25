import React,{ useState } from 'react'

export default function UserInput({addToWishList , clearWishList}) {
    const [wish,setWish]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        addToWishList(wish);
       setWish('');
    }
    function handleChange(e){
        e.preventDefault();
       setWish(e.target.value);
    }
    function handleClear(e){
         e.preventDefault();
         clearWishList();
    }
    return (
        <>
            <div className='user'>
                <form onSubmit={handleSubmit} className='inpt'>
                    <label htmlFor='wish'>Wish : </label>
                    <input type='text' id='wish' value={wish} onChange={handleChange}/>
                    <button className='btn'>Add</button>
                    <button className='btn' onClick={handleClear}>Clear</button>
                </form>
            </div>

        </>
    )
}

