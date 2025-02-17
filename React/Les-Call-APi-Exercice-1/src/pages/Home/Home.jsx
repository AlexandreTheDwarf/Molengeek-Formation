import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import "./Home.scss";
import Search from "../Search/Search";

function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter.trim() === "") {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products || []);
        })
        .catch((error) => console.error("Erreur :", error));
    } else {
      fetch(`https://dummyjson.com/products/search?q=${filter}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products || []);
        })
        .catch((error) => console.error("Erreur :", error));
    }
  }, [filter]); // Exécuter l'effet à chaque changement du filtre

  return (
    <div className="Home">
      <h1>Liste des Produits</h1>
      <Search setFilter={setFilter} />
      <section>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <Cards product={product} />
            </div>
          ))
        ) : (
          <p>Chargement des produits...</p>
        )}
      </section>
    </div>
  );
}

export default Home;
