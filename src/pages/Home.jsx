import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="btn-group btn-group-vertical">
              <Link to='/login'><button className="btn btn-primary">Login</button></Link>
              <Link to='/signup'><button className="btn btn-outline btn-primary">Sign up</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home;