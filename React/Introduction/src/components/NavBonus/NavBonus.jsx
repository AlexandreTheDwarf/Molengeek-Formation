import "./NavBonus.scss"
import { CiSearch } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

function NavBonus({content}){

    return (
        <div className="NavBonus">
            <div>
                <div>
                    <label htmlFor="Place">What?</label>
                    <input type="text" name="Place" id="Place" placeholder="Ex: Restaurant, Food, Automobile"/>
                    <span><FaList /></span>
                </div>
                <div className="DivLocation">
                    <label htmlFor="Location">Location :</label>
                    <input type="text" name="Location" id="Location" placeholder="Ex: London, Newyork, Charleroi"/>
                    <span><FaLocationCrosshairs /></span>
                </div>
            </div>
            <button>
                Search <CiSearch />
            </button>
        </div>
    )
}

export default NavBonus