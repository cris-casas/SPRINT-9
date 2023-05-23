import React, { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

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
      console.log("inicio de sesión conseguido")
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  if (loggedIn) {
    return (
      <div className="registro-container">
        <h1>Successful Login!</h1>
      </div>
    );
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" 
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign up</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Login;