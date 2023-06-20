import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeImg from "../assets/subasta-trasteros-welcome.svg";

const WelcomeStart = () => {

  return (
    <>
      <img src={WelcomeImg} className="rounded-xl" alt="Subasta de trasteros" />
      <div className="card-actions">
        <div className="card-body items-center text-center">
          <Link to='/price' className="link" >
            <button className="btn btn-primary">Start Game</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomeStart;