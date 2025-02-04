# League of Legends Champions Viewer

Ce projet est une application React qui affiche la liste des champions de League of Legends en utilisant l'API Data Dragon de Riot Games.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé Node.js et npm sur votre machine.

- [Node.js](https://nodejs.org/)
- [Riot Games Developer Portal](https://developer.riotgames.com/docs/lol)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/AlexandreTheDwarf/Molengeek-Formation/tree/main/React/Les-Use-Effect-Exercices-Bonus
   ```
2. Accédez au dossier du projet :
   ```bash
   cd riot-champions-viewer
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Démarrez l'application :
   ```bash
   npm run dev
   ```

## Fonctionnalités

- Récupère la liste des champions depuis l'API Data Dragon.
- Affiche chaque champion avec son image et son nom.
- Filtrage dynamique des champions par nom grâce à un champ de recherche.

## Code principal

L'application utilise les Hooks `useState` et `useEffect` pour récupérer et afficher les données :

```javascript
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [champions, setChampions] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/15.2.1/data/fr_FR/champion.json")
      .then((res) => res.json())
      .then((data) => {
        const championsArray = Object.values(data.data);
        setChampions(championsArray);
      });
  }, []);

  return (
    <>
      <nav>
        <label htmlFor="Filter">Search :</label>
        <input type="text" id="Filter" onChange={(e) => setFilter(e.target.value)} />
      </nav>
      <div className="ChampionContainer">
        {champions.length !== 0 ? (
          champions.map((champ) => (
            champ.name.toLowerCase().startsWith(filter.toLowerCase()) && (
              <div key={champ.id}>
                <h3>{champ.name}</h3>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/champion/${champ.id}.png`}
                  alt={champ.name}
                  width={100}
                />
              </div>
            )
          ))
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
}

export default App;
```

## Objectifs pédagogiques

- Apprendre à consommer une API en React.
- Utiliser `useState` et `useEffect` pour gérer l'état et les effets secondaires.
- Mettre en place un filtrage dynamique des données affichées.

## Améliorations possibles

- Ajouter un chargement plus esthétique avec un spinner.
- Afficher plus d'informations sur chaque champion (rôles, statistiques, etc.).
- Améliorer le style avec une meilleure mise en page.

Bon développement ! 🚀

