import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import du hook useNavigate
import "./Details.scss";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook pour naviguer
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Erreur :", error));
  }, [id]);

  if (!product) {
    return <p>Chargement du produit...</p>;
  }

  return (
    <div className="Details">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p><strong>Description :</strong> {product.description}</p>
      <p><strong>Prix :</strong> {product.price}€</p>
      <p><strong>Marque :</strong> {product.brand}</p>
      <p><strong>Catégorie :</strong> {product.category}</p>

      {/* ✅ Bouton Retour */}
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Retour
      </button>
    </div>
  );
}

export default Details;
