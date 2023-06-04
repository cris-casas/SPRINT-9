import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const LogInContext = createContext();

const LogInProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername === username && storedPassword === password) {
      setLoggedIn(true);
      alert('Successful Login!');
      navigate('/storages');
      
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <LogInContext.Provider
      value={{
        username,
        password,
        loggedIn,
        handleUsernameChange,
        handlePasswordChange,
        handleSubmit,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInProvider;