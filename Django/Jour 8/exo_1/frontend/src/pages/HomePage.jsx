import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:8000/api/me/', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    // Supprime le token du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');

    // Met à jour l'état de l'utilisateur
    setUser(null);

    // Redirige vers la page de connexion
    navigate('/login');
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      {user ? (
        <>
          <h2>Bienvenue, {user.username} !</h2>
          <p>ID : {user.id}</p>
          <p>Email : {user.email}</p>
          <button onClick={handleLogout}>Déconnexion</button>
        </>
      ) : (
        <>
          <h2>Bienvenue invité !</h2>
          <Link to="/login">Connexion</Link> | <Link to="/register">Inscription</Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
