import React from 'react'
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "./NavBar.scss"

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className='NavBar'>
        <div className='searchBar'>
            <FaSearch />
            <input type="search" name="" id="" placeholder= 'Search For A country ...'/>
        </div>
        <div className='DropDownDiv'>
            <button onClick={handleOpen}>Filter by region <MdKeyboardArrowDown /></button>
            {
            open 
            ? 
            <div>
                <span>Africa</span>
                <span>America</span>
                <span>Asia</span>
                <span>Europa</span>
                <span>Oceania</span>
            </div>
            : 
            ""
            }
        </div>
    </nav>
  )
}

export default NavBar