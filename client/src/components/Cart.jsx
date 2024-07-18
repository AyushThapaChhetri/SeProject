import React from 'react'
import { useContext } from 'react';
import { Products } from '../products'
import { shopContext } from '../context/shopContext'
import CartItem from './CartItem';
import '../Css/Cart.css';


export default function Cart() {
    const { getTotal, cartItems } = useContext(shopContext);

    const alertPush = () => {
        getTotal() > 0 ? alert("Successfully pushed to cart") : alert("Put Some items  to cart");
    }
    return (
        <>
            <div className='checkout-main'>
                <div className='checkout'>
                    <div className='checkout-title'>
                        <h1>Your Cart</h1>
                    </div>
                    <div className='checkout-items'>
                        {Products.map((product) => {
                            if (cartItems[product.id] > 0) {
                                return <CartItem data={product} />;
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className='checkout-total'>
                <p>Total: Rs.{getTotal()}</p>
                <button onClick={alertPush}>Push to checkout</button>
                {/* display message if no item in cart */}
                {/* continue shopping button */}
            </div>
        </>

    );
}