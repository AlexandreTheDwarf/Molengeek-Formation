import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BackOffice({ token }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then(response => {
      console.log(response.data); // log the data for debugging
      setUsers(response.data);
    })
    .catch(error => {
      console.log(error.response ? error.response.data : error); // log the error for debugging
      setError("Accès refusé ou problème réseau");
    });
  }, [token]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/users/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then(() => {
      setUsers(users.filter(user => user.id !== id));
    })
    .catch(error => {
      console.log(error.response ? error.response.data : error); // log the error for debugging
      setError("Suppression impossible");
    });
  };

  const handleRoleChange = (id, newRole) => {
    axios.patch(`http://localhost:8000/api/users/${id}/`, { role: newRole }, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then(response => {
      setUsers(users.map(user => user.id === id ? response.data : user));
    })
    .catch(error => {
      console.log(error.response ? error.response.data : error); // log the error for debugging
      setError("Changement de rôle refusé");
    });
  };

  return (
    <div>
    <Link to="/home">Home</Link>
      <h2>Backoffice 👑</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user.role !== 'admin' && (
                  <>
                    <button onClick={() => handleDelete(user.id)}>🗑️ Supprimer</button>
                    <button onClick={() => handleRoleChange(user.id, user.role === 'member' ? 'banni' : 'member')}>
                      🔁 {user.role === 'member' ? 'Bannir' : 'Réactiver'}
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BackOffice;
