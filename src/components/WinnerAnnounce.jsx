import React, { useContext } from 'react';
import { StoragesContext } from "../context/StoragesContext";
import { Link } from 'react-router-dom';
import MainImg from "../assets/ganador.svg";

const WinnerAnnounce = () => {
  
  const { winningPlayer } = useContext(StoragesContext);

  return (
    <>
      
        {winningPlayer && (
          <div className="card">
          <h1 className="font-black text-3xl" >Ganador: <br></br>{winningPlayer}</h1>
          <figure>
            <img src={MainImg} className="" alt={MainImg} />
          </figure>
          <div className="card-body items-center text-center">
            <Link to='/ranking' className="link" >Ver Ranking</Link>
            <Link to='/start' className="link" >
              <button className="btn btn-primary">Volver a empezar</button>
            </Link>
          </div>
        </div>
          )}

    </>
  );
};

export default WinnerAnnounce;