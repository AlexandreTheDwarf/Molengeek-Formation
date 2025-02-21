import React from 'react';
import "./ShoppingCard.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/features/CartSlice'; 

function ShoppingCard({ pizza }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(pizza));
  };

  return (
    <div className='ShoppingCard'>
      <div className='Top'>
        <img src={pizza.imageUrl} alt={pizza.name} />
      </div>
      <div className='Mid'>
        <h2>{pizza.name}</h2>
      </div>
      <div className='Bot'>
        <span>Prix : €{pizza.price.toFixed(2)}</span>
        <FaShoppingCart onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default ShoppingCard;
