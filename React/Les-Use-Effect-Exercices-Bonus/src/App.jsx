import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [champions, setChampions] = useState([]);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/15.2.1/data/fr_FR/champion.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Extraire les champions sous forme de tableau
        const championsArray = Object.values(data.data);
        setChampions(championsArray);
      });
  }, []);

  return (
    <>
      <nav>
        <label htmlFor="">Search :</label>
        <input type="text" name="" id="Filter" onChange={(e) => setFilter(e.target.value)}/>
      </nav>
      <div className="ChampionContainer">
        {champions.length != 0 ? champions.map((champ) => {
          if (champ.name.toLowerCase().startsWith(filter.toLowerCase())) {
            return(
              <div key={champ.id}>
              <h3>{champ.name}</h3>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/champion/${champ.id}.png`}
                alt={champ.name}
                width={100}
              />
            </div>
            )
          }
        } ):
        "loading"
      }
      </div>
    </>
  );
}

export default App;

