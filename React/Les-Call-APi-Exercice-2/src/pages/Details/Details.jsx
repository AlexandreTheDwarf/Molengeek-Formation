import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./Details.scss";
import DefaultTemplate from '../../templates/DefaultTemplate';
import { getAllCountryData } from '../../api/fetchApi';

function Details() {
    const { id } = useParams(); // Récupérer l'ID du pays depuis l'URL
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [allCountries, setAllCountries] = useState([]); // Pour stocker tous les pays

    useEffect(() => {
        async function fetchData() {
            const countriesData = await getAllCountryData();
            setAllCountries(countriesData); // Enregistrer tous les pays
            const selectedCountry = countriesData.find(c => c.cca3 === id);
            setCountry(selectedCountry);
        }

        fetchData();
    }, [id]);

    if (!country) {
        return <p>Chargement...</p>;
    }

    // Récupérer les pays voisins en utilisant leurs codes
    const borderCountries = country.borders || [];

    // Récupérer les noms des pays voisins à partir des codes
    const borderCountryNames = borderCountries.map(code => {
        const borderCountry = allCountries.find(c => c.cca3 === code);
        return borderCountry ? borderCountry : null; // Retourner l'objet pays si trouvé
    }).filter(country => country !== null); // Filtrer les valeurs nulles

    // Fonction pour gérer la navigation vers la page du pays voisin
    const handleBorderClick = (cca3) => {
        navigate(`/${cca3}`); // Utilise le code `cca3` pour rediriger
    };

    return (
        <DefaultTemplate>
            <section className='Details'>
                <div className='Nav'>
                    <button onClick={() => navigate(-1)}>
                        <FaLongArrowAltLeft /> Back
                    </button>
                </div>
                <div className='CountryDetails'>
                    <div className='Left'>
                        <img src={country.flags.svg} alt={country.name.common} />
                    </div>
                    <div className='Right'>
                        <h1>{country.name.common}</h1>
                        <div className='info'>
                            <div className='infoLeft'>
                                <ul>
                                    <li>Native Name : <span>{Object.values(country.name.nativeName || {})[0]?.common}</span></li>
                                    <li>Population : <span>{country.population.toLocaleString()}</span></li>
                                    <li>Region : <span>{country.region}</span></li>
                                    <li>Sub Region : <span>{country.subregion}</span></li>
                                    <li>Capital : <span>{country.capital?.[0]}</span></li>
                                </ul>
                            </div>
                            <div className='infoRight'>
                                <ul>
                                    <li>Top Level Domain : <span>{country.tld?.[0]}</span></li>
                                    <li>Currencies : <span>{Object.values(country.currencies || {})[0]?.name}</span></li>
                                    <li>Languages : <span>{Object.values(country.languages || {}).join(', ')}</span></li>
                                </ul>
                            </div>
                        </div>
                        {borderCountryNames.length > 0 && (
                            <div className='BorderCountries'>
                                <span>Border Countries :</span>
                                <ul>
                                    {borderCountryNames.map((borderCountry, index) => (
                                        <li key={index} onClick={() => handleBorderClick(borderCountry.cca3)}>
                                            {borderCountry.name.common}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </DefaultTemplate>
    );
}

export default Details;

