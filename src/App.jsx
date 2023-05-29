import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'
import StoragesPage from './pages/StoragesPage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/storages" element={<StoragesPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
