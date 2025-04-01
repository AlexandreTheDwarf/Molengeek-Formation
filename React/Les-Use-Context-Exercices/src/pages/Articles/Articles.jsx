import React, { useContext } from 'react';
import { PaginationContext } from "../../context/paginationContext";
import NavBar from '../../Components/NavBar/NavBar';

function Articles() {
  const { articlesPerPage, currentPage, changePage } = useContext(PaginationContext);

  // Exemple de données d'articles
  const articles = Array.from({ length: 100 }, (_, i) => `Article ${i + 1}`);

  // Calculer les articles à afficher sur la page actuelle
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className='Articles'>
      <NavBar/>
      <h1>Liste des Articles</h1>
      <ul>
        {currentArticles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          Précédent
        </button>
        <span> Page {currentPage} </span>
        <button onClick={() => changePage(currentPage + 1)} disabled={indexOfLastArticle >= articles.length}>
          Suivant
        </button>
      </div>
    </div>
  );
}

export default Articles;
