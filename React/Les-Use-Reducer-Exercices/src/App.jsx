import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Resume from './pages/Resume/Resume';
import NotFound from './pages/NotFound/NotFound'; 

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <ShoppingCart /> },
    { path: "/resume", element: <Resume /> },
    { path: "*", element: <NotFound /> } 
  ], {
    basename: "/" 
  });

  return (
    <RouterProvider router={router} />
  );
}

export default App;
