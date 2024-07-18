import React, { createContext, useState } from "react";
import { Products } from "../products";

export const shopContext = createContext(null);

const getDefaultCart =() =>{
    let cart ={}; 
    for (let i =0;i<Products.length+1;i++){
        cart[i] =0;
    }
    return cart;
}

export const ShopContextProvider = (props)=>{
    const[cartItems,setCartItems] = useState(getDefaultCart());

    // const toggleFavs=()=>{
    //     for(product in Products){
    //         if(product.favourite){
    //             setCartItems((prev)=>({
    //                 ...prev,favourite:!prev.favourite
    //             }))
    //         }
    //     }
    // }

    const addToCart =(itemId)=>{
        setCartItems((prev)=>(
            {...prev,[itemId]:prev[itemId]+1}
        ))
    }


    const getTotal = ()=>{
        let totalAmt=0;
        for(const item in cartItems){
           if(cartItems[item]>0){
            let itemInfo = Products.find((product)=>product.id === Number(item));
            totalAmt += cartItems[item]*itemInfo.price;
           }
        }
        return totalAmt;
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>(
            {...prev,[itemId]:prev[itemId]-1}
        ))
       
    }

    const contextValue ={cartItems,addToCart,removeFromCart,getTotal};
    console.log(cartItems)
    //console.log(getTotal())
    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}