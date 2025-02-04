import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./Exo1.scss";

function Exo1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Le component a été mis à jour")
  }, [count])
  

  return (
    <div className="Exo1">
      <div onClick={() => setCount(count + 1)} className="RoundTop">
        <FaPlus />
      </div>
      <div className="RoundBody">{count}</div>
      <div onClick={() => setCount(count - 1)} className="RoundBot">
        <FaMinus />
      </div>
    </div>
  );
}

export default Exo1;
