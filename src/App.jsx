import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUpProvider from './context/SignUpContext';
import LogInProvider from './context/LogInContext';
import GameProvider from "./context/GameContext";
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import StoragesPage from './pages/StoragesPage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <SignUpProvider>
        <LogInProvider>
          <GameProvider>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/storages" element={<StoragesPage/>} />
            </Routes>
          </GameProvider>
        </LogInProvider>
      </SignUpProvider>
    </BrowserRouter>
  )
}

export default App
