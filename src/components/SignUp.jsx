import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
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


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="font-black" >Create a new account</h1>
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
                      <button type="submit" className="btn btn-primary">Signup</button>
                  </div>
                  <div className="py-4">
                      <p>Do you have an account? <Link to='/login' className="link" >Login</Link></p>
                  </div>
              </form>
          </div>
          </div>
      </div>
    </div>
  );
};

export default SignUp;