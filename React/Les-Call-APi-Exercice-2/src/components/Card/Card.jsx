import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Card.scss";

function Card({ name, image, population, region, capital, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`); // Redirige vers la page de détails du pays
  };

  return (
    <div className='Card' onClick={handleClick}>
      <div className='Top'>
        <img src={image} alt={name} />
      </div>
      <div className='Bottom'>
        <h2>{name}</h2>
        <div className='Description'>
          <p><span>Population :</span> {population.toLocaleString()}</p>
          <p><span>Region :</span> {region}</p>
          <p><span>Capital :</span> {capital}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
