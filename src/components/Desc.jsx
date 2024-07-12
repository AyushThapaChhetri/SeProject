import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Css/Desc.css';

export default function Desc() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>No product data available</div>;
  }

  return (
    <div className='desc-main'>
      <div className='desc-sub-1'>
        <img src={product.productImage} className='desc-img' alt={product.productName} />
      </div>
      <div className='desc-sub-2'>
        <div>
          <h1 className='desc-title'>{product.productName}</h1>
          <p className='desc-category'>{product.category}</p>
          <p className='desc-desc'>{product.description || 'No description available.'}</p>
          <p className='desc-price'>Rs. {product.price}</p>
        </div>
        <div className='desc-buttons'>
          <button>+</button>
          <p>2</p>
          <button>-</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}