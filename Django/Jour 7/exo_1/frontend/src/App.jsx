import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Home from './components/Home'
import { useState } from 'react'

function App() {
    const [message, setMessage] = useState('')
    const [user, setUser] = useState(null)

    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register message={message} setMessage={setMessage} />} />
                <Route path="/login" element={<Login message={message} setMessage={setMessage} />} />
                <Route path="/" element={<Home user={user} setUser={setUser} setMessage={setMessage} message={message} />} />
            </Routes>
        </Router>
    )
}

export default App
