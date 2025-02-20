import { createContext, useState } from "react";

// Contexte avec des valeurs par défaut
const PaginationContext = createContext({
  articlesPerPage: 10,
  currentPage: 1,
  changePage: () => {},
});

const PaginationContextProvider = ({ children }) => {
    const [articlesPerPage, setArticlesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
  
    const changePage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <PaginationContext.Provider value={{
        articlesPerPage,
        currentPage,
        changePage,
      }}>
        {children}
      </PaginationContext.Provider>
    );
  };
  
  export { PaginationContextProvider };
