import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from "../context/GameContext";

const PriceOptions = () => {
  
  const { handleOptionClick } = useContext(GameContext);

  return (
      <>
      <h1 className="text-3xl font-bold mb-10">Elige una opción de precio</h1>
      <div className="grid grid-cols-2 gap-2">
        <Link to='/eliminate-objects' className="link" >
          <button className="btn btn-outline btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionA')}>A</button>
        </Link>
        <Link to='/eliminate-objects' className="link" >
          <button className="btn btn-outline btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionB')}>B</button>
        </Link>
        <Link to='/eliminate-objects' className="link" >
          <button className="btn btn-outline btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionC')}>C</button>
        </Link>
        <Link to='/eliminate-objects' className="link" >
          <button className="btn btn-outline btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionD')}>D</button>
        </Link>
      </div>
      </>


  );
};

export default PriceOptions;