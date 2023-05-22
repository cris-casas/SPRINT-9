import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
