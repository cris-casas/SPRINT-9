import React, { useContext } from 'react';
import { GameContext } from "../context/GameContext";
import { Link } from 'react-router-dom';

const TableStorage = () => {
  
  const { storages, showTable } = useContext(GameContext);

  return (
    <>
    <div className="overflow-y-auto h-100">
    <h1 className="font-black text-3xl pb-10" >Ranking:</h1>
      {showTable && (
        <div className="overflow-x-auto">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>Trastero</th>
                <th>Comprado</th>
                <th>Precio</th>
                <th>Valor real</th>
                <th>Beneficio</th>
              </tr>
            </thead>
            <tbody>
              {storages.map(storage => (
                <tr key={storage.id}>
                  <td>{storage.name}</td>
                  <td>{storage.formData.player}</td>
                  <td>{storage.formData.price}</td>
                  <td>{storage.value}</td>
                  <td>{storage.value - storage.formData.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
      <div className="mt-10">
        <Link to='/start'><button className="btn m-1 btn-primary btn-wide" >Volver a empezar</button></Link>
        <Link to='/winner'><button className="btn m-1 btn-outline btn-primary border-2 btn-wide">Atrás</button></Link>
      </div>
    </>
  );
};

export default TableStorage;
