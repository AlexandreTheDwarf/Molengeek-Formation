import React, { useState, useEffect } from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { getAllCountryData } from '../../api/fetchApi';
import CardList from '../../components/CardList/CardList';
import NavBar from '../../components/NavBar/NavBar';
import "./Home.scss";

function Home({ darkMode, setDarkMode }) {
    const [countryData, setCountryData] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [errorApi, setErrorApi] = useState(null);

    useEffect(() => {
        async function fetchCountryData() {
            try {
                const response = await getAllCountryData();
                setCountryData(response);
                setFilteredCountries(response); // Par défaut, afficher tous les pays
            } catch (error) {
                console.log(error.message);
                setErrorApi(error);
            }
        }
        fetchCountryData();
    }, []);

    // Gérer la recherche
    const handleSearch = (query) => {
        const filtered = countryData.filter(country => 
            country.name.common.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    // Gérer le filtre par région
    const handleFilter = (region) => {
        if (region === "All") {
            setFilteredCountries(countryData);
        } else {
            const filtered = countryData.filter(country => 
                country.region === region
            );
            setFilteredCountries(filtered);
        }
    };

    return (
        <DefaultTemplate darkMode={darkMode} setDarkMode={setDarkMode}>
            <section className={darkMode ? "home Dark" : "home Light"}>
                <NavBar onSearch={handleSearch} onFilter={handleFilter} darkMode={darkMode}/>
                {errorApi ? (
                    <p>Erreur lors de la récupération des données.</p>
                ) : (
                    <CardList countries={filteredCountries}  darkMode={darkMode}/>
                )}
            </section>
        </DefaultTemplate>
    );
}

export default Home;
