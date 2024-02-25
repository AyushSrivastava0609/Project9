import React from 'react'

export default function Data({wishList,removeFromWishList}) {
    
    let list=wishList.map((item,index)=><li key={index}>{item}<button className='but' onClick={() => removeFromWishList(index)}>❌</button></li>)
  return (
    <div className='datalist'>
        <h2>&#160;&#160;&#160;WishList :- </h2>
      <ul>
        {list}
      </ul>
    </div>
  )
}
