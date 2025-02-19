import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Card.scss";

function Card({ name, image, population, region, capital, id, darkMode }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`); // Redirige vers la page de détails du pays
  };

  return (
    <div className={darkMode ? "Card Dark" : "Card Light"} onClick={handleClick}>
      <div className='Top'>
        <img src={image} alt={name} className={darkMode ? "" : "Light"}/>
      </div>
      <div className='Bottom'>
        <h2>{name}</h2>
        <div className='Description'>
          <p><span className={darkMode ? "Dark" : "Light"}>Population :</span> {population.toLocaleString()}</p>
          <p><span className={darkMode ? "Dark" : "Light"}>Region :</span> {region}</p>
          <p><span className={darkMode ? "Dark" : "Light"}>Capital :</span> {capital}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
