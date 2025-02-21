import React from 'react';
import "./ArticleContainer.scss";
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import pizzas from '../../data/pizza.json';

function ArticleContainer() {
  return (
    <div className='ArticleContainer'>
      {pizzas.map((pizza) => (
        <ShoppingCard
          key={pizza.id}
          pizza={pizza} 
        />
      ))}
    </div>
  );
}

export default ArticleContainer;
