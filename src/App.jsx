import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
