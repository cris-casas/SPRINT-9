import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from "../context/GameContext";

const PriceOptions = () => {
  
  const { handleOptionClick } = useContext(GameContext);

  return (
      <>
          <h1 className="font-black text-5xl w-40 p-2 m-6 rounded-full border-2 border-primary" >1</h1>
          <h1 className="text-3xl font-black px-12">¿Con que Precio jugáis?</h1>
            <h2 className="mt-2 mx-4 text-lg leading-6 m-6">Selecciona la opción correspondiente</h2>
          <div className="grid grid-cols-2 gap-2">
            <Link to='/eliminate-objects' className="link" >
              <button className="btn btn-outline border-2 btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionA')}>A</button>
            </Link>
            <Link to='/eliminate-objects' className="link" >
              <button className="btn btn-outline border-2 btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionB')}>B</button>
            </Link>
            <Link to='/eliminate-objects' className="link" >
              <button className="btn btn-outline border-2 btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionC')}>C</button>
            </Link>
            <Link to='/eliminate-objects' className="link" >
              <button className="btn btn-outline border-2 btn-primary btn-lg" onClick={() => handleOptionClick('priceOptionD')}>D</button>
            </Link>
          </div>
          <div className="m-6">
            <Link to='/start' className="link" >
              <button className="btn btn-outline btn-primary border-2">Atrás</button>
            </Link>
          </div>

      </>


  );
};

export default PriceOptions;