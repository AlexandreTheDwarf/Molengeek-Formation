import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./NavBar.scss";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculer le nombre total d'articles dans le panier
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className='NavBar'>
      <Link to="/" className='DivTitle'>
        <h1>Allo Pizza</h1>
      </Link>
      <Link to="/cart" className='DivShoppingCart'>
        <p>
          Panier :
          <span className='ArticleCounter'>{totalItems}</span>
          <FaShoppingCart />
        </p>
      </Link>
    </nav>
  );
}

export default NavBar;
