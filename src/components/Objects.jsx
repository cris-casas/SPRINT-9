import React, { useContext } from 'react';
import { GameContext } from "../context/GameContext";

const Objects = () => {
  
  const { objects, handleCheckboxChange, handleEliminarClick } = useContext(GameContext);

  return (
    <div className="hero bg-base-200">
    <div className="hero-content text-center">
    <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-10">Elimina los objetos que no están en juego</h1>
        <div className="form-control">
        {objects.map(object => (
            <div key={object.id}>
            <label className="label cursor-pointer">
                <span className="label-text text-xl">{object.name}</span>
                <input
                type="checkbox"
                className="checkbox"
                checked={object.seleccionado || false}
                onChange={event => handleCheckboxChange(event, object.id)}
                />
            </label>
            </div>
        ))}
        <button className="btn btn-outline" onClick={handleEliminarClick}>Eliminar</button>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Objects;

