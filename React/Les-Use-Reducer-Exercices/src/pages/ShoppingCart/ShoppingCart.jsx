import React from 'react';
import "./ShoppingCart.scss";
import MyTemplate from '../../template/MyTemplate';
import { Link } from 'react-router-dom';
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

  // Calculer le total du panier
  const total = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <MyTemplate>
      <section className='ShoppingCart'>
        <h2>Votre Panier</h2>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='CartItem'>
                <img src={item.imageUrl} alt={item.name} width="50" />
                <div className='DivPizza'>
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
        <div className='DivTotalCart'>
          <Link to="/" className='Modify'>Modifier la commande</Link>
          <p>Total : €{total.toFixed(2)}</p>
        </div>
        {
        cartItems.length === 0 
        ? 
        ""
        :
        <Link to="/resume" className='resume'>Finaliser la commande</Link>
        }
      </section>
    </MyTemplate>
  );
}

export default ShoppingCart;
