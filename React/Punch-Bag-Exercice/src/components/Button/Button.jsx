import React from "react";
import "./Button.scss";
import { GiPunchBlast } from "react-icons/gi";
import { MdRestartAlt } from "react-icons/md";

// Bonus Perso :

import useSound from "use-sound";


function Button({ lifePoint, setLifePoint, setIsShaking }) {
  const mySound = "/sounds/punch.mp3";
  const [playSound] = useSound(mySound); // Hook placé correctement

  function handlePunch() {
    setLifePoint(prev => Math.max(0, prev - 10));
    playSound(); // Joue le son
    setIsShaking(true);

    setTimeout(() => {
        setIsShaking(false); // Désactive après 300ms
      }, 300);
  }

  function handleRestart() {
    setLifePoint(100);
  }

  return (
    <div className="Button">
      {lifePoint > 0 ? (
        <button className="Punch" onClick={handlePunch}>
          <GiPunchBlast />
        </button>
      ) : null}
      {lifePoint === 0 ? (
        <button className="Restart" onClick={handleRestart}>
          <MdRestartAlt />
        </button>
      ) : null}
    </div>
  );
}

export default Button;

