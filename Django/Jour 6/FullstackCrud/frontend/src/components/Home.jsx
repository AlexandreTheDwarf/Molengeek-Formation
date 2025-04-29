import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';

function Home() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = () => {
        axios.get('http://127.0.0.1:8000/api/wishlists/')
            .then(res => {
                const sortedData = res.data.wishlists.sort((a, b) => b.note - a.note); // Trier par note descendante
                setData(sortedData);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const destroy = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/wishlists/delete/${id}/`); // Ajout de la barre oblique
            console.log('Delete Response:', response.data); // Log de la réponse
            setData(data.filter(item => item.id !== id));
            setError(null);
        } catch (err) {
            console.error('Delete Error:', err.response ? err.response.data : err.message); // Log détaillé de l'erreur
            setError('Failed to delete the wishlist item');
        }
    };

    const handleSuccess = () => {
        setShowForm(false);
        fetchData();
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setShowUpdateForm(true);
    };

    return (
        <div>
            <h1>Homepage</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {showForm ? (
                <CreateForm onSuccess={handleSuccess} />
            ) : (
                <button onClick={() => setShowForm(true)}>Ajouter à ma wishlist</button>
            )}

            {showUpdateForm && selectedItem && (
                <UpdateForm
                    item={selectedItem}
                    onSuccess={() => {
                        setShowUpdateForm(false);
                        setSelectedItem(null);
                        fetchData();
                    }}
                />
            )}

            {data.length > 0 ? (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Note</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.note}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>
                                    <Link to={`/wishlists/${item.id}`}><button>Show</button></Link>
                                    <button onClick={() => destroy(item.id)}>Delete</button>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default Home;
