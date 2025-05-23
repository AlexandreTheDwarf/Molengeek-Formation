import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/details';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wishlists/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
