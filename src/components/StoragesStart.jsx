import React from 'react';
import { Link } from 'react-router-dom';
import MainImg from "../assets/subasta.svg";

const ObjectsEliminate = () => {

  return (
    <>
      <div className="card">
        <h1 className="font-black text-3xl" >¡Que empiece la subasta!</h1>
        <figure>
          <img src={MainImg} className="px-10 pt-5" alt={MainImg} />
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
    </>
  );
};

export default ObjectsEliminate;