import axios from 'axios';
import { useState } from 'react';

function UpdateForm({ item, onSuccess }) {
    const [formData, setFormData] = useState({
        name: item.name,
        description: item.description,
        price: item.price,
        note: item.note,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://127.0.0.1:8000/api/wishlists/update/${item.id}/`, formData);
            onSuccess(); // Appeler la fonction de succès après mise à jour
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Edit Wishlist Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Note:
                    <input
                        type="number"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
}

export default UpdateForm;
