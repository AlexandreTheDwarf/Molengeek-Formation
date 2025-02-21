import React from 'react';
import "./ShoppingCart.scss";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../app/features/CartSlice';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className='ShoppingCart'>
      <h2>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className='CartItem'>
              <img src={item.imageUrl} alt={item.name} width="50" />
              <div>
                <h3>{item.name}</h3>
                <p>Prix : €{(item.price * item.quantity).toFixed(2)}</p>
                <div className='QuantityControls'>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>Supprimer</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ShoppingCart;
