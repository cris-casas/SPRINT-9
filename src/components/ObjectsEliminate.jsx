import React from 'react';
import { Link } from 'react-router-dom';
import ObjetoEliminadoImg from "../assets/objeto-eliminado.svg";

const ObjectsEliminate = () => {

  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">

      <div className="card-body">
        <h2 className="card-title">Selecciona los objetos que no estan en juego</h2>
        <figure>
        <img src={ObjetoEliminadoImg} className="rounded-xl px-10 pt-10" alt="Subasta de trasteros" />
      </figure>
        <div className="card-actions justify-end">
        <Link to='/objects' className="link" >
          <button className="btn btn-primary">Siguiente</button>
        </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ObjectsEliminate;