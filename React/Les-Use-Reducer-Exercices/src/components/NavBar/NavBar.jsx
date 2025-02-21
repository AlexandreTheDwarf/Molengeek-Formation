import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./NavBar.scss";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  // Calculer le nombre total d'articles dans le panier
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleNavigateToCart = () => {
    navigate('/cart');
  };

  return (
    <nav className='NavBar'>
      <div>
        <h1>Allo Pizza</h1>
      </div>
      <div className='DivShoppingCart' onClick={handleNavigateToCart}>
        <p>
          Panier :
          <span className='ArticleCounter'>{totalItems}</span>
          <FaShoppingCart />
        </p>
      </div>
    </nav>
  );
}

export default NavBar;
