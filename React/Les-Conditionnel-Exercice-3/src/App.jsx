import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import Card from './components/Card/Card'

function App() {

  const MagicData = [
      {name : "Grand abolisseur", image : "abolisseur.png", type: "humain et clerc", stats: "2/2"},
      {name : "Nalia de'Arnise", image : "nalia.png", type: "humain et gredin", stats: "3/3"},
      {name : "Lae'zel, championne de Vlaakith", image : "laezel.png", type: "gith et guerrier", stats: "3/3"},
      {name : "Astarion, le décadent", image : "astarion.png", type: "vampire et elfe et gredin", stats:  "4/4"}
  ]

  return (
    <>
      <NavBar/>
      <Search/>
      <div className='CardContainer'>
        {
          MagicData.map((Magic, i)=>{
            return (
              <Card key={i} Magic={Magic}/>
            )
          })
        }
      </div>
      

    </>
  )
}

export default App
