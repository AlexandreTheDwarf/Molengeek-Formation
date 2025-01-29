import SearchBar from "../searchbar/searchbar"
import "./NavBar.scss"

function NavBar(){

    return (
        <nav className="NavBar">
                <div className="NavBarLink">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                <SearchBar/>
        </nav>
    )
}

export default NavBar