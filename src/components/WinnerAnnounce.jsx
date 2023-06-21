import React, { useContext } from 'react';
import { GameContext } from "../context/GameContext";
import { Link } from 'react-router-dom';
import MainImg from "../assets/ganador.svg";

const WinnerAnnounce = () => {
  
  const { winningPlayer } = useContext(GameContext);

  return (
    <>
       {winningPlayer && (
      <div className="card">
      <h1 className="font-black text-3xl" >{winningPlayer}</h1>
      <figure>
        <img src={MainImg} className="" alt={MainImg} />
      </figure>
      <div className="card-body items-center text-center">
        <div className="card-actions">
          <Link to='/objects' className="link" >
            <button className="btn btn-outline btn-primary border-2">Atrás</button>
          </Link>
          <Link to='/storages' className="link" >
            <button className="btn btn-primary">Start</button>
          </Link>
        </div>
      </div>
    </div>
      )}
    </>
  );
};

export default WinnerAnnounce;