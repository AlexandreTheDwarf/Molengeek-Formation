import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from "./context/themeContext";
import Home from "./pages/Home/Home";
import Inscription from "./pages/Inscription/Inscription";
import ToDoList from "./pages/ToDoList/ToDoList";



function App() {

  const rooter = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/inscription', element:<Inscription/>},
    {path: '/todolist', element:<ToDoList/>}
  ])

  return (
     <>
    {/* le componnent ThemeContextProvider est le fournisseur du context Theme. */}
      <ThemeContextProvider>
        <RouterProvider router={rooter}/>

      </ThemeContextProvider>

    </>
  );
}

export default App;
