import React, { useContext } from 'react';
import { StoragesContext } from "../context/StoragesContext";

const Winner = () => {
  
  const { winningPlayer } = useContext(StoragesContext);

  return (
    <>
       {winningPlayer && (
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-3xl font-bold my-10">¡Ganador!</h1>
              <p>{winningPlayer}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Winner;