import React, { useContext } from 'react';
import { GameContext } from "../context/GameContext";
import { Link } from 'react-router-dom';
import Lampara from "../assets/lampara.svg";

const Objects = () => {
  
  const { objects, handleCheckboxChange, handleEliminarClick } = useContext(GameContext);

  return (
  <>
    <div className="overflow-y-auto h-100">
      <div className="form-control pt-5">
      <div className="grid grid-cols-2 gap-4 m-6">
        {objects.map(object => (
          <div key={object.id} className="card border-solid border-2 border-primary shadow-lg">
            <figure>
              <img src={Lampara} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center p-0">
              <h2 className="card-title">{object.name}</h2>
              <div className="card-actions">
              <input
                type="checkbox"
                className="checkbox"
                checked={object.seleccionado || false}
                onChange={event => handleCheckboxChange(event, object.id)}
                />
              </div>
            </div>
          </div>
        ))}
        </div>
          <Link to='/storages' className="link" ><button className="btn m-4" onClick={handleEliminarClick}>Eliminar</button></Link>
        </div>
    </div>
  </>
  );
};

export default Objects;

