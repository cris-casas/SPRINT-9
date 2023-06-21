import React from 'react';
import { Link } from 'react-router-dom';
import MainImg from "../assets/subasta-trasteros-welcome.svg";

const WelcomeStart = () => {

  return (
    <>
      <img src={MainImg} className="rounded-xl" alt={MainImg} />
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