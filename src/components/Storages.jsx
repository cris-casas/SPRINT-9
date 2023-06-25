import React, { useContext } from 'react';
import { StoragesContext } from "../context/StoragesContext";
import { Link } from 'react-router-dom';

const Storages = () => {
  
  const { storages, handleStorage, handleInputChange, } = useContext(StoragesContext);

  return (
    
    <>
    <div className="overflow-y-auto h-100">
        <div className="form-control m-5">
        <h1 className="text-3xl font-bold mt-10">Trasteros comprados</h1>
        {storages.map((storage) => (
        <div key={storage.id} className="card border-solid border-2 border-primary shadow-lg m-5" >
            <h2 className="text-lg font-bold mb-5">{storage.name}</h2>
            <label className="input-group input-group-md">
                <span>Price</span>
                <input
                type="text"
                placeholder="Introduce el precio pagado"
                className="input input-bordered"
                name="price"
                value={storage.formData.price}
                onChange={(e) => handleInputChange(e, storage.id)}
                />
                <span>€</span>
            </label>
            <label className="input-group input-group-md">
                <span>Jugador</span>
                <input
                type="text"
                placeholder="Jugador que ganó la subasta"
                className="input input-bordered"
                name="player"
                value={storage.formData.player}
                onChange={(e) => handleInputChange(e, storage.id)}
                />
            </label>
            </div>
        ))}

        <div className="hero bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <Link to='/winner' className="link" >
                <button className="btn btn-outline" onClick={handleStorage}>Calcular</button>
            </Link>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>

  );
};

export default Storages;