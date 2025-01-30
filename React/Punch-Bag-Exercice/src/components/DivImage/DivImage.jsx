import React from "react";
import "./DivImage.scss";

function DivImage({ lifePoint, isShaking }) {
  return (
    <div className={`DivImage ${isShaking ? "shake" : ""}`}>
      {lifePoint > 0 ? (
        <img src="/bag.png" alt="Sac de frappe" />
      ) : (
        <img src="/bag-burst.png" alt="Sac éclaté" />
      )}
    </div>
  );
}

export default DivImage;
