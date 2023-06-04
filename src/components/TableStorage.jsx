import React, { useContext } from 'react';
import { GameContext } from "../context/GameContext";

const TableStorage = () => {
  
  const { storages, showTable } = useContext(GameContext);

  return (
    <>
    {showTable && (
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-3xl font-bold my-10">Resultados</h1>
              <table className="table w-full">
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
          </div>
        </div>
        )}
    </>
  );
};

export default TableStorage;
