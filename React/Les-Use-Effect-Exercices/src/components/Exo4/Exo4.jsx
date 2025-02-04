import React, { useState, useEffect } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import "./Exo4.scss";

function Exo2() {
  const [seconde, setseconde] = useState(0)
  const [minute, setminute] = useState(2)
  const [play, setplay] = useState(false)
  
  useEffect(() => {
    let i = setInterval(() => {
      if (minute === 0 && seconde === 0) return; // Stop à 00:00
      if (play === true){
        if(seconde == 0 && minute > 0){
            setseconde(59)
            setminute(t=>t-1)
        }else{
            setseconde(t=>t-1)     
        }
      }
    }, 1000);
    return ()=>{
      clearInterval(i)
    }
    
  }, [play, seconde])

  function affichage(x) {
    let numb = x;
    let text = numb.toString();
    let padded = text.padStart(2,"0");

    return (padded)
  }

  return (
    <div className="Exo2">
          <div className="RoundTop">

          </div>
          <div className="RoundBody">
                <span className="Afficheur">{affichage(minute)} : {affichage(seconde)}</span>
          </div>
          <div className="RoundBot">
                <span className="PlayButton" onClick={() => setplay(!play)}> 
                    {
                    play ? <FaPauseCircle/> : <FaPlayCircle/>
                    }
                    </span>
          </div>
        </div>
  )
}

export default Exo2