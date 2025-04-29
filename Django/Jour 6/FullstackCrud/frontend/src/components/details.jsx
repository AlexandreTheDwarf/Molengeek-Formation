import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/wishlists/${id}/`)
            .then(res => {
                console.log('API Response:', res.data); // Log the response data
                setItem(res.data.wishlist); // Accéder à res.data.wishlist
            })
            .catch(err => {
                console.error('API Error:', err);
                setError('Failed to load wishlist details');
            });
    }, [id]);

    if (error) {
        return <h1>{error}</h1>;
    }

    if (!item) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Détails de la wishlist</h1>
            <Link to="/"><button>Retour à l'accueil</button></Link> {/* Lien vers la page d'accueil */}
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Note: {item.note}</p>
        </div>
    );
}

export default Detail;
