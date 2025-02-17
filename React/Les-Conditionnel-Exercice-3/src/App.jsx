import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import Card from './components/Card/Card'

function App() {

  const MagicData = [
      {name : "Grand abolisseur", image : "abolisseur.png", type: "humain et clerc", attribut: "", capacite: ["Pendant votre tour, vos adversaires ne peuvent pas lancer de sorts ni activer de capacités d'artefacts, de créatures ou d'enchantements."], ambiance: "Vos superstitions et vos grommellements sont impuissants face à ma droiture", stats: "2/2"},
      {name : "Nalia de'Arnise", image : "nalia.png", type: "humain et gredin", attribut: "", capacite: ["Vous pouvez regarder la carte du dessus de votre bibliothèque à tout moment.", "Vous pouvez lancer des sorts de clerc, de gredin, de guerrier et de sorcier depuis le dessus de votre bibliothèque.", "Au début du combat pendant votre tour, si vous avez un groupe complet, mettez un marqueur +1/+1 sur chaque créature que vous contrôlez et ces créatures acquièrent le contact mortel jusqu'à la fin du tour."], ambiance: "", stats: "3/3"},
      {name : "Lae'zel, championne de Vlaakith", image : "laezel.png", type: "gith et guerrier", attribut: "", capacite: ["Si vous deviez mettre au moins un marqueur sur une créature ou un planeswalker que vous contrôlez ou sur vous, mettez autant de chaque sorte de ces marqueurs plus un sur ce permanent ou ce joueur à la place.", "Choisissez un passé (Vous pouvez avoir un passé comme deuxième commandant.)"], ambiance: "", stats: "3/3"},
      {name : "Astarion, le décadent", image : "astarion.png", type: "vampire et elfe et gredin", attribut: "Contact mortel, lien de vie", capacite: [""], ambiance: "", stats:  "4/4"}
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
