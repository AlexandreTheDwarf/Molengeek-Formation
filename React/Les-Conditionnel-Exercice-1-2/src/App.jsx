import './App.css'
import Connection from './components/Connection/Connection'
import Perso from './components/Perso/Perso'

function App() {
  const myName = "Alexandre"

  return (
    <>
      {/* <Perso first_name={myName} /> */}
      <Connection/>
    </>
  )
}

export default App
