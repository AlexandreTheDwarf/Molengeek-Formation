import React from 'react';
import "./DefaultTemplate.scss";
import {useState} from "react";
import { IoIosMoon } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';  // Importer useNavigate

export default function DefaultTemplate({children, darkMode, setDarkMode}) {
    const navigate = useNavigate();  // Initialiser navigate

    return (
        <div className='template'>
            <header className={darkMode ? "Dark" : "Light"}>
                <div>
                    <h1 onClick={() => navigate('/')}>Where in the World ?</h1>  {/* Utiliser navigate pour revenir à la page d'accueil */}
                </div>
                <div className='DarkMode' onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode 
                        ? 
                        <span><CiLight /> Light Mod</span> 
                        : 
                        <span><IoIosMoon /> Dark Mod</span>
                    }  
                </div>
            </header>
            <div className={darkMode ? "Container Dark" : "Container Light"}>
                {children}
            </div>
        </div>
    );
}
