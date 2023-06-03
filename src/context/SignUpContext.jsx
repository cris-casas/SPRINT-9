import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpContext = createContext();

const SignUpProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    const [userList, setUserList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const isRegistered = localStorage.getItem('registered') === 'true';
        if (isRegistered) {
        setRegistered(true);
        console.log('User List:', userList);
        }
    }, [userList]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setTimeout(() => {
        setRegistered(true);
        localStorage.setItem('registered', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        const newUser = {
            username: username,
            password: password,
        };
        
        setUserList((prevUserList) => [...prevUserList, newUser]);
        alert('Successful Signup!');
        navigate('/login');
        }, 2000); // 2 segundos
    };
  
    /*{
      
    if (registered) {
      return (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Successful SignUp!</span>
          </div>
        </div>
      );
    }

    }*/


  return (
    <SignUpContext.Provider
      value={{
        username,
        password,
        handleUsernameChange,
        handlePasswordChange,
        handleSubmit,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpProvider;