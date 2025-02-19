import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(true); 

    return (
        <Routes>
            <Route path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path='/:id' element={<Details darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
    );
}

export default App;
