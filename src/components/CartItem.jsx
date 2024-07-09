import React from 'react'
import { shopContext } from '../context/shopContext'
import { useContext } from 'react';


function CartItem(props) {
  const {productImage,id,productName,category,price}= props.data;
  const {cartItems,addToCart,removeFromCart} =useContext(shopContext); 


  return (
    <div className='card'>
        <img src={productImage} alt />
        <p>{id}</p>
        <p>{productName}</p>
        <p>{category}</p>
        <p>{price}</p>
        <div className='count'>
          <button onClick={()=>addToCart(id)}>+</button>
            <p>{cartItems[id]}</p>
          <button onClick={()=>removeFromCart(id)}>-</button>
          {/* delete button */}
        </div>
    </div>
  )
}

export default CartItem