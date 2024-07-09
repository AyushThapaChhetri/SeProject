import { useContext } from 'react';
import '../Css/Card.css'
import {shopContext} from "../context/shopContext"


export default function Card(props){

    const {addToCart,cartItems} =useContext(shopContext);
    const {id,productImage,productName,category,price,favourite} = props.data
    const cartItemAmount = cartItems[id]

        return(
            <>
                <div className="">
                    <div className="product-card">
                            {/* <button onClick={()=>{toggleFavs()}}>{cartItems[id].favourite?"like":"unlike"}</button> */}
                            <img className="prduct-img"src={productImage} alt />
                            {/* <p>{id}</p> */}
                            <p className='product-title'>{productName}</p>
                            <p className="product-description">{category}</p>
                            <p className="product-price">Rs. {price}</p>
                            <div className="action-buttons">
                                <button>Details</button>
                                <button onClick={()=>addToCart(id)}>Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>} </button>
                                
                            </div>
                    </div>
                </div>
            </>
        );
        
};

