import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUpProvider from './context/SignUpContext';
import LogInProvider from './context/LogInContext';
import GameProvider from "./context/GameContext";
import StoragesProvider from "./context/StoragesContext";

import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import WelcomeStartPage from './pages/WelcomeStartPage'
import PriceOptionsPage from './pages/PriceOptionsPage'
import ObjectsEliminatePage from './pages/ObjectsEliminatePage'
import ObjectsPage from './pages/ObjectsPage'
import StoragesPage from './pages/StoragesPage'
import StoragesStartPage from './pages/StoragesStartPage'
import WinnerAnnouncePage from './pages/WinnerAnnouncePage'
import ResultsPage from './pages/ResultsPage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <SignUpProvider>
        <LogInProvider>
          <GameProvider>
            <StoragesProvider>
              <div className="mockup-phone">
                <div className="camera"></div> 
                <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/start" element={<WelcomeStartPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/signup" element={<SignUpPage/>} />
                    <Route path="/price" element={<PriceOptionsPage/>} />
                    <Route path="/eliminate-objects" element={<ObjectsEliminatePage/>} />
                    <Route path="/objects" element={<ObjectsPage/>} />
                    <Route path="/storages" element={<StoragesPage/>} />
                    <Route path="/storages-start" element={<StoragesStartPage/>} />
                    <Route path="/winner" element={<WinnerAnnouncePage/>} />
                    <Route path="/ranking" element={<ResultsPage/>} />
                  </Routes>
                  </div>
                </div>
              </div>
            </StoragesProvider>
          </GameProvider>
        </LogInProvider>
      </SignUpProvider>
    </BrowserRouter>
  )
}

export default App
