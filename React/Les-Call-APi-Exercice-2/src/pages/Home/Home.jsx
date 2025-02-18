import React, { useState, useEffect } from 'react';
import "./Home.scss";
import NavBar from '../../components/NavBar/NavBar'
import DefaultTemplate from '../../templates/DefaultTemplate';
import { getAllCountryData } from '../../api/fetchApi';
import CardList from '../../components/CardList/CardList';

function Home() {
    const [countryData, setCountryData] = useState([]);
    const [errorApi, setErrorApi] = useState(null);

    useEffect(() => {
        const controller = new AbortController(); 

        async function fetchCountryData() {
            try {
                const response = await getAllCountryData();
                setCountryData(response);  // Correction ici (pas `response.products`)
            } catch (error) {
                console.log(error.message);
                setErrorApi(error);

                let popupError = document.querySelector('.popupError');
                if (popupError) {  
                    let pop = document.createElement('div');
                    pop.textContent = error.message;
                    pop.classList.add("pop");
                    popupError.appendChild(pop);
                    setTimeout(() => pop.remove(), 5000);
                }
            }
        }

        fetchCountryData();

        return () => controller.abort();
    }, []);

    return (
        <DefaultTemplate>
            <section className='Home'>
                <NavBar/>
                <div className="popupError"></div>
                {errorApi ? (
                    <p>Erreur lors de la récupération des données.</p>
                ) : (
                    <CardList countries={countryData} />
                )}
            </section>
        </DefaultTemplate>
    );
}

export default Home;
