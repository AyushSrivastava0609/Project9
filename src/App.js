import React , {useState} from 'react'
import './App.css';
import UserInput from './Components/UserInput';
import Data from './Components/Data';
export default function App() {
  const [wishList,setWishList]=useState([]);
  function addToWishList(wish){
    setWishList([...wishList,wish]);
  }
  function clearWishList(){
    setWishList([]);
  }
  function removeFromWishList(index) {
    const newWishlist = [...wishList];
    newWishlist.splice(index, 1);
    setWishList(newWishlist);
}
  return (
    <div className='wishlist'>
      <UserInput addToWishList={addToWishList} clearWishList={clearWishList}/>
      <Data wishList={wishList} removeFromWishList={removeFromWishList}/>
    </div>
  )
}
