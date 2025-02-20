import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/themeContext";
import { PaginationContextProvider } from "./context/paginationContext"; // ✅ Import du provider
import Home from "./pages/Home/Home";
import Inscription from "./pages/Inscription/Inscription";
import ToDoList from "./pages/ToDoList/ToDoList";
import Articles from "./pages/Articles/Articles";

function App() {
  const rooter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/inscription", element: <Inscription /> },
    { path: "/todolist", element: <ToDoList /> },
    { path: "/articles", element: <Articles /> },
  ]);

  return (
    <>
      <ThemeContextProvider>
        <PaginationContextProvider>
          <RouterProvider router={rooter} />
        </PaginationContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
