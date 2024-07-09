import Card from "./Card"
import { Products } from "../products";
import {Link} from "react-router-dom";
import '../Css/Shop.css'
import { useState } from "react";


export default function Shop(){
    const [searchTerm,setSearchTerm] =useState("")

    const filterProducts = () => {
        return Products.filter(product =>
            product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return(
        <>  
            <input onChange={(event)=>setSearchTerm(event.target.value)} type="text" className="search-box"></input>
            {/* {console.log(searchTerm)} */}
            <div className="shop">
                {/* {Products.map((product)=><Card data={product}/>)} */}
                {filterProducts().map(product => (
                    <Card key={product.productId} data={product} />
                ))}
            </div>
            <Link to="/cart">
                <button>
                    cart
                </button>
            </Link>
            <Link to="/favs">
                <button>
                    favs
                </button>
            </Link>
        </>
    );
};
