import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation();

  function ProtectedRoute({ children, redirect = './login', isAuthentication }) {
    if (!isAuthentication) {
      navigate(redirect)
    }

    return children;
  }

  useEffect(() => {
    if(!localStorage.getItem('token')){
      if(location.pathname != '/register'){
        navigate('/login')
      }
    }
  }, [])
  
  return (
    <>
      <Routes>
        {(
          <>
          <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
        </>
        )}




      </Routes>
    </>
  )
}

export default App
