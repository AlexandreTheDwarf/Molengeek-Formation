import React from 'react';
import "./Resume.scss";

function Resume() {
  const generateOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000); // Génère un numéro aléatoire à 6 chiffres
  };

  const orderNumber = generateOrderNumber();

  return (
    <section className='Resume'>
      <div className='ticker-container'>
        <h2 className='ticker-item'>Merci pour votre commande !</h2>
        <p className='ticker-item'>Votre commande a bien été prise en compte.</p>
        <p className='ticker-item'>Numéro de commande : {orderNumber}</p>
      </div>
    </section>
  );
}

export default Resume;
