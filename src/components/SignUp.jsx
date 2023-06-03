
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignUpContext } from "../context/SignUpContext";

const SignUp = () => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useContext(SignUpContext);


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