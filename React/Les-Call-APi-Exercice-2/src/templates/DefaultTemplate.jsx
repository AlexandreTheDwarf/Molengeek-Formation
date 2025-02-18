import React from 'react';
import "./DefaultTemplate.scss";
import { IoIosMoon } from "react-icons/io";
import { useNavigate } from 'react-router-dom';  // Importer useNavigate

export default function DefaultTemplate({ children }) {
    const navigate = useNavigate();  // Initialiser navigate

    return (
        <div className='template'>
            <header>
                <div>
                    <h1 onClick={() => navigate('/')}>Where in the World ?</h1>  {/* Utiliser navigate pour revenir à la page d'accueil */}
                </div>
                <div>
                    <span><IoIosMoon /> Dark Mode</span>
                </div>
            </header>
            <div className='container'>
                {children}
            </div>
        </div>
    );
}
