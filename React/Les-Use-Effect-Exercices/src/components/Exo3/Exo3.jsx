import React, { useState, useEffect } from "react";
import "./Exo3.scss";

function Exo3() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 100));
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="Exo3">
      <div className="Progress" style={{ width: progress + "%" }}>
        {progress > 0 && <span className="spanProgress">{progress}%</span>}
      </div>
      <div className="ProgressLeft" style={{ width: 100 - progress + "%" }}>
        {progress < 100 && (
            <span 
            className="spanProgressLeft" 
            >
            {100 - progress}%
            </span>
        )}
      </div>
    </div>
  );
}

export default Exo3;


