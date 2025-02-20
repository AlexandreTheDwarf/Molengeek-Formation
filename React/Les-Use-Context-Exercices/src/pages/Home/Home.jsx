import React from 'react'
import { useContext } from "react";
import NavBar from '../../Components/NavBar/NavBar'
import ThemeContext from '../../context/themeContext';

function Home() {
  const { user, email} = useContext(ThemeContext);
  return (
    <div className='Home'>
        <NavBar/>

        <h1>User : {user}</h1>
        <h1>Email : {email}</h1>
    </div>
  )
}

export default Home