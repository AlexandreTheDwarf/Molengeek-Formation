import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(""); // État pour stocker le texte de l'input
  const [textCopy, setTextCopy] = useState("");
  const [inputFocus, setinputFocus] = useState("false")

  function ScoreUp() {
    setCount(count + 1); // On met à jour l'état avec la nouvelle valeur
  }

  function ScoreDown() {
    setCount(count - 1); // On met à jour l'état avec la nouvelle valeur
  }

  function ChangeText(event) {
    if (event.key === "Enter") { // Vérifie si la touche pressée est "Entrée"
      setText(event.target.value); // Met à jour le texte avec la valeur de l'input
    }
  }

  function CopyText(){
      alert(textCopy)
  }

  function Alert(){
    alert("Alert General !!!!!")
  }

  function Focus(){
    setinputFocus(true)
  }

  function DeFocus(){
    setinputFocus(false)
  }

  return (
    <>
    <h1>Exo 1 :</h1>
    <div>
      <button onClick={ScoreDown}>-1</button>
        <span id="score">{count}</span>
      <button onClick={ScoreUp}>+1</button>
    </div>
    <h1>Exo 2 :</h1>
    <div>
        <p>Bonjour {text}</p>
        <input type="text" onKeyDown={ChangeText} />
      </div>
    <h1>Exo 3 :</h1>
    <div>
        <input onChange={(e)=>{setTextCopy(e.target.value)}} type="text"/>
        <button onClick={CopyText}>Copy</button>
    </div>
    <h1>Exo 4 :</h1>
      <button onClick={Alert}>ALERT !!!!</button>
    <h1>Exo 5:</h1>
        <input type="text" onFocus={Focus} onBlur={DeFocus} className={inputFocus === true ? "vert" : ""} />
    </>
  )
}

export default App
