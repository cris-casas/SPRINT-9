import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUpProvider from './context/SignUpContext';
import LogInProvider from './context/LogInContext';
import GameProvider from "./context/GameContext";
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import PriceOptionsPage from './pages/PriceOptionsPage'
import ObjectsPage from './pages/ObjectsPage'
import StoragesPage from './pages/StoragesPage'
import ResultsPage from './pages/ResultsPage'
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
              <Route path="/price" element={<PriceOptionsPage/>} />
              <Route path="/objects" element={<ObjectsPage/>} />
              <Route path="/storages" element={<StoragesPage/>} />
              <Route path="/results" element={<ResultsPage/>} />
            </Routes>
          </GameProvider>
        </LogInProvider>
      </SignUpProvider>
    </BrowserRouter>
  )
}

export default App
