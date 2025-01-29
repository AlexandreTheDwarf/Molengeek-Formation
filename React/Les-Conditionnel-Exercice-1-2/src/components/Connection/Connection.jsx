import FormConnexion from "../FormConnexion/FormConnexion";
import FormInscription from "../FormInscription/FormInscription";
import "./Connection.scss"

function Connection() {

const Compte = true;
// const Compte = false;

  return (
    <div className="Connection">
        {
            Compte ? <FormConnexion/> : <FormInscription/>
        }
    </div>
  )
}

export default Connection