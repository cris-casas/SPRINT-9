import React from 'react';
import { Link } from 'react-router-dom';
import MainImg from "../assets/objeto-eliminado.svg";

const ObjectsEliminate = () => {

  return (
    <>
      <div className="card">
        <h1 className="item-center text-center font-black text-5xl w-30 p-2 m-6 rounded-full border-2 border-primary">2</h1>
        <h1 className="font-black text-3xl" >¡Elimina objetos!</h1>
        <h2 className="mt-2 mx-4 text-lg leading-6">Selecciona los que no estan en juego</h2>
        <figure>
          <img src={MainImg} className="px-10 pt-10" alt={MainImg} />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <Link to='/price' className="link" >
              <button className="btn btn-outline btn-primary border-2">Atrás</button>
            </Link>
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