import React from 'react';
import Card from '../Card/Card';
import "./CardList.scss";

function CardList({ countries }) {
  return (
    <div className="CardList">
      {countries.map((country) => (
        <Card
          key={country.cca3}
          id={country.cca3} // ID unique pour l'URL
          name={country.name.common}
          image={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0] || "N/A"}
        />
      ))}
    </div>
  );
}

export default CardList;

