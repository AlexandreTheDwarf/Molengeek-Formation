import React from "react";
import "./HealthBar.scss";

function HealthBar({ lifePoint }) { 
  return (
    <div className="HealthBar">
      <div style={{ width: lifePoint + "%" }} className="HealthBar__fill">
        {
            lifePoint > 0 ? lifePoint  + "%" : ""
        }
        </div>
    </div>
  );
}

export default HealthBar;
