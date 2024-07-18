import React from 'react'
import { shopContext } from '../context/shopContext'
import { useContext } from 'react';
import '../Css/CartItem.css';



function CartItem(props) {
  const {productImage,id,productName,category,price}= props.data;
  const {cartItems,addToCart,removeFromCart} =useContext(shopContext); 


  return (
    <div className='cart'>
      <div >
        <img className="cartImage" src={productImage} alt />
      </div>
      <div className="cartDetails">
        {/* <p id="cartDetails-id">{id}</p> */}
        <p id="cartDetails-title">{productName}</p>
        <p id="cartDetails-cat">{category}</p>
        <p id="cartDetails-price">Rs. {price}</p>
      </div>
        
        <div className='count'>
          <button className="rounded-button" id="count-elem" onClick={()=>addToCart(id)}>+</button>
          <p id="count-elem">{cartItems[id]}</p>
          <button className="rounded-button" id="count-elem" onClick={()=>removeFromCart(id)}>-</button>
          {/* delete button */}
        </div>
    </div>
  )
}

export default CartItem