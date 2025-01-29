import "./Searchbar.scss"

function SearchBar(){

    return (
        <div className="SearchBar">
                <label htmlFor="search">Search :</label>
                <input type="search" name="search" id="search" />
                <button type="submit">Go</button>
        </div>
    )
}

export default SearchBar