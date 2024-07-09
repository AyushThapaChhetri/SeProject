import React from 'react'
import { useContext } from 'react';
import { Products } from '../products'
import { shopContext } from '../context/shopContext'
import CartItem from './CartItem';

export default function Cart() {
  const {getTotal,cartItems} =useContext(shopContext); 
  
    return (
        <div className='cart'>
        <div>
            <h1>Your List</h1>
        </div>
            <div className='cart-items'>
                {Products.map((product) => {
                if (cartItems[product.id] > 0) {
                    return <CartItem data={product} />;
                }
                })}
            </div>
            <div className='checkout'>
                <p>Total:${getTotal()}</p>
                {/* display message if no item in cart */}
                {/* continue shopping button */}
            </div>
        </div>
    );
    }