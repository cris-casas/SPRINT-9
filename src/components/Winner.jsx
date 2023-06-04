import React, { useContext } from 'react';
import { GameContext } from "../context/GameContext";

const Winner = () => {
  
  const { winningPlayer } = useContext(GameContext);

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