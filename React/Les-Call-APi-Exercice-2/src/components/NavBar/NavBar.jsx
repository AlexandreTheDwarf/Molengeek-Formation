import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "./NavBar.scss";

function NavBar({ onSearch, onFilter, darkMode }) {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleOpen = () => {
        setOpen(!open);
    };

    // Gérer la recherche
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value); // Remonter la recherche
    };

    // Gérer la sélection d'une région
    const handleFilter = (region) => {
        onFilter(region); // Remonter la région sélectionnée
        setOpen(false); // Fermer le dropdown après sélection
    };

    return (
        <nav className='NavBar'>
            <div className={darkMode ? "searchBar Dark" : "searchBar Light"}>
                <FaSearch />
                <input 
                    type="search" 
                    placeholder='Search For A country ...' 
                    value={searchQuery}
                    onChange={handleSearch} 
                />
            </div>
            <div className={darkMode ? "DropDownDiv Dark" : "DropDownDiv Light"} >
                <button onClick={handleOpen} >
                    Filter by region <MdKeyboardArrowDown />
                </button>
                {open && (
                    <div>
                        <span onClick={() => handleFilter('All')}>All</span>
                        <span onClick={() => handleFilter('Africa')}>Africa</span>
                        <span onClick={() => handleFilter('Americas')}>America</span>
                        <span onClick={() => handleFilter('Asia')}>Asia</span>
                        <span onClick={() => handleFilter('Europe')}>Europe</span>
                        <span onClick={() => handleFilter('Oceania')}>Oceania</span>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
