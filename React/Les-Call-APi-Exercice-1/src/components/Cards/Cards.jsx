import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.scss";

function Cards({ product }) {
  const navigate = useNavigate(); // Hook pour naviguer

  const handleClick = () => {
    navigate(`/${product.id}`); // Redirige vers la page de détails avec l'ID
  };
  return (
    <div className="Cards" onClick={handleClick}>
      <div className="top">
        <h1>{product.title}</h1>
      </div>
      <div className="mid">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="bot">
        <p><strong>Prix :</strong> {product.price}€</p>
      </div>
    </div>
  );
}

export default Cards;
