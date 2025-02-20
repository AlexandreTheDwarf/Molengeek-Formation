import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className='NavBar'>
        <ul>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/inscription'}>inscription</Link></li>
            <li><Link to={'/todolist'}>ToDoList</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar