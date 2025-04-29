import { useState } from 'react';
import axios from 'axios';

function CreateForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        note: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/wishlists/create/', formData);
            onSuccess(); // Signale à Home que la création a réussi
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nom" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} required />
            <input type="number" name="price" placeholder="Prix" step="0.01" onChange={handleChange} required />
            <input type="number" name="note" placeholder="Note (1-10)" min="1" max="10" onChange={handleChange} required />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default CreateForm;
