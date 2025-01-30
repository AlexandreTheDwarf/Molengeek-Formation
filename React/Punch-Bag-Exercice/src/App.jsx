import { useState } from 'react'
import './App.css'
import HealthBar from './components/HealthBar/HealthBar'
import DivImage from './components/DivImage/DivImage'
import Button from './components/Button/Button'

function App() {
  const [lifePoint, setlifePoint] = useState(100)
  const [isShaking, setIsShaking] = useState(false);

  return (
    <>
      <h1>It's time to FIGHT !!!</h1>
      <HealthBar lifePoint={lifePoint} />
      <DivImage lifePoint={lifePoint} isShaking={isShaking}/>
      <Button lifePoint={lifePoint} setLifePoint={setlifePoint} setIsShaking={setIsShaking}/>
    </>
  )
}

export default App
