import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import MyCard from './components/MyCard/MyCard'
// import CardExo1 from './components/CardExo1/CardExo1'
import CardExo2 from './components/CardExo2/CardExo2'
import NavBonus from './components/NavBonus/NavBonus'

function App() {
  // const [count, setCount] = useState(0)
  // let name = "Alexandre"
  // let score = 0
  // function ScorePlus (){
  //   score ++
  // }

  // const CryptoData = {
  //   cryptoImage : "image-equilibrium.jpg",
  //   cryptoName : "Equilibrium #3429",
  //   cryptoSloggan : "Our Equilibrium collection promotes balance and calm.",
  //   userImage : "image-avatar.png",
  //   userName : "Jules Wyvern"
  // }

  return (
    <>
      {/* <h1>Vite + React + {name}</h1>
      <MyCard content={"Alex"}/>
      <MyCard content={"Raoul"}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => ScorePlus()}>
          score +1
        </button>
        <p>
          {score}
        </p>
      </div> */}

        {/* <CardExo1 Image={"image-victor"} FullName={"Victor Crest"} Age={26} Town={"London"} NbrFollowers={80} NbrLikes={803} NbrPhotos={1.4}/> */}
        {/* <CardExo1 Image={"Nain"} FullName={"Le Nain"} Age={260} Town={"Erebor"} NbrFollowers={100} NbrLikes={3} NbrPhotos={0}/> */}

        {/* <CardExo2 content={CryptoData}/> */}

        <NavBonus/>
    </>
  )
}

export default App
