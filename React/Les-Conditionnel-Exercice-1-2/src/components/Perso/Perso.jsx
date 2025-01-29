import "./Perso.scss";

function Perso({ first_name }) {
  return (
    <div className="Perso">
      {first_name === "Alexandre" ? (
        <p>Bienvenue, {first_name} !</p>
      ) : (
        <p>Vous n'êtes pas la bonne personne.</p>
      )}
    </div>
  );
}

export default Perso;
