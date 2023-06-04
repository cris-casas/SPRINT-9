import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from "../context/GameContext";

const PriceOptions = () => {
  
  const { handleOptionClick } = useContext(GameContext);

  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-10">Elige una opción de precio</h1>
          <div className="btn-group btn-group-vertical">
          <Link to='/objects' className="link" >
            <button className="btn btn-outline" onClick={() => handleOptionClick('priceOptionA')}>Opción A</button>
            <button className="btn btn-outline" onClick={() => handleOptionClick('priceOptionB')}>Opción B</button>
            <button className="btn btn-outline" onClick={() => handleOptionClick('priceOptionC')}>Opción C</button>
            <button className="btn btn-outline" onClick={() => handleOptionClick('priceOptionD')}>Opción D</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceOptions;