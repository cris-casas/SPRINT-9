import React, { useState } from 'react';
import PriceOptions from '../components/PriceOptions';

const DashboardPage = () => {
  const [objects, setObjects] = useState([
    { id: 1, name: 'Silla', prices: { priceOptionA: 10, priceOptionB: 11, priceOptionC: 12, priceOptionD: 13 }, selectedPrice: null, storage: ['Storage 1','Storage 2','Storage 3'] },
    { id: 2, name: 'Bici', prices: { priceOptionA: 20, priceOptionB: 21, priceOptionC: 22, priceOptionD: 23 }, selectedPrice: null, storage: ['Storage 1','Storage 3'] },
    { id: 3, name: 'Lámpara', prices: { priceOptionA: 30, priceOptionB: 31, priceOptionC: 32, priceOptionD: 33 }, selectedPrice: null, storage: ['Storage 2','Storage 3'] },
    { id: 4, name: 'Reloj', prices: { priceOptionA: 40, priceOptionB: 41, priceOptionC: 42, priceOptionD: 43 }, selectedPrice: null, storage: ['Storage 2','Storage 3'] },
    { id: 5, name: 'Teléfono', prices: { priceOptionA: 50, priceOptionB: 51, priceOptionC: 52, priceOptionD: 53 }, selectedPrice: null, storage: ['Storage 1','Storage 2','Storage 3'] },
  ]);

  const [storages, setStorages] = useState([
    { 
      id: 1, 
      name: 'Storage 1', 
      value: 3000, 
      formData: { price: '', player: '' },
    },
    { 
      id: 2, 
      name: 'Storage 2', 
      value: 6000, 
      formData: { price: '', player: '' },
    },
    { 
      id: 3, 
      name: 'Storage 3', 
      value: 5000, 
      formData: { price: '', player: '' },
    },
  ]);

  const [showTable, setShowTable] = useState(false);

  const [winningPlayer, setWinningPlayer] = useState("");


  const handleOptionClick = (option) => {
    const updatedObjects = objects.map((object) => ({
      ...object,
      selectedPrice: object.prices[option],
    }));
    setObjects(updatedObjects);
    console.log(updatedObjects);
  };

  const handleCheckboxChange = (event, id) => {
    const updatedObjects = objects.map((object) => {
      if (object.id === id) {
        return {
          ...object,
          seleccionado: event.target.checked,
        };
      }
      return object;
    });
    setObjects(updatedObjects);
  };

  const handleEliminarClick = () => {
    const objetosFiltrados = objects.filter(object => !object.seleccionado);
    setObjects(objetosFiltrados);
  };

  const handleStorage = () => {
    let maxBenefit = -Infinity; // Inicializar el beneficio máximo como -Infinity
    let maxBenefitStorage = null; // Almacenar el storage con el mayor beneficio
    let winningPlayer = null; // Almacenar el nombre del jugador ganador
    
    storages.forEach(storage => {
      const price = storage.formData.price;
      const player = storage.formData.player;
      const benefit = storage.value - price;
      
      if (benefit > maxBenefit) {
        maxBenefit = benefit;
        maxBenefitStorage = storage.name;
        winningPlayer = player;
      }
    });
    
    setShowTable(true); // Mostrar la tabla
    
    // Mostrar el nombre del jugador ganador si existe
    if (winningPlayer) {
      setWinningPlayer(winningPlayer);
    } else {
      setWinningPlayer("No hay un jugador ganador");
    }
    
    console.log(`Storage con mayor beneficio: ${maxBenefitStorage}`);
    console.log(`Jugador ganador: ${winningPlayer}`);
  };
  

  const handleInputChange = (event, storageId) => {
    const { name, value } = event.target;
    const updatedStorages = storages.map((storage) => {
      if (storage.id === storageId) {
        return {
          ...storage,
          formData: {
            ...storage.formData,
            [name]: value,
          },
        };
      }
      return storage;
    });
    setStorages(updatedStorages);
  };
  
  return (
    <>

      <PriceOptions handleOptionClick={handleOptionClick} />

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


      <h1 className="text-3xl font-bold mt-10">Trasteros comprados</h1>

      {storages.map((storage) => (
        <div className="hero bg-base-200" key={storage.id}>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="form-control">
                <h2 className="text-lg font-bold my-5">{storage.name}</h2>
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
            </div>
          </div>
        </div>
      ))}

      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
          <button className="btn btn-outline" onClick={handleStorage}>Calcular</button>
          </div>
        </div>
      </div>

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

export default DashboardPage;



/*{

import React, { useState } from 'react';

const DashboardPage = () => {
  const [objects, setObjects] = useState([
    { id: 1, name: 'Producto 1', prices: { priceOptionA: 10, priceOptionB: 11, priceOptionC: 12, priceOptionD: 13 }, selectedPrice: null },
    { id: 2, name: 'Producto 2', prices: { priceOptionA: 20, priceOptionB: 21, priceOptionC: 22, priceOptionD: 23 }, selectedPrice: null },
    { id: 3, name: 'Producto 3', prices: { priceOptionA: 30, priceOptionB: 31, priceOptionC: 32, priceOptionD: 33 }, selectedPrice: null },
    { id: 4, name: 'Producto 4', prices: { priceOptionA: 40, priceOptionB: 41, priceOptionC: 42, priceOptionD: 43 }, selectedPrice: null },
    { id: 5, name: 'Producto 5', prices: { priceOptionA: 50, priceOptionB: 51, priceOptionC: 52, priceOptionD: 53 }, selectedPrice: null },
  ]);

  const handleOptionClick = (option) => {
    const updatedObjects = objects.map((object) => ({
      ...object,
      selectedPrice: object.prices[option],
    }));
    setObjects(updatedObjects);
    console.log(updatedObjects);
  };


  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setObjects(objects.map(object => {
        if (object.id === id) {
          return {
            ...object,
            seleccionado: true
          };
        }
        return object;
      }));
    } else {
      setObjects(objects.map(object => {
        if (object.id === id) {
          return {
            ...object,
            seleccionado: false
          };
        }
        return object;
      }));
    }
  };

  const handleEliminarClick = () => {
    const objetosFiltrados = objects.filter(object => !object.seleccionado);
    setObjects(objetosFiltrados);
  };
  
  return (
    <>
      <div>
        <button onClick={() => handleOptionClick('priceOptionA')}>Opción A</button>
        <button onClick={() => handleOptionClick('priceOptionB')}>Opción B</button>
        <button onClick={() => handleOptionClick('priceOptionC')}>Opción C</button>
        <button onClick={() => handleOptionClick('priceOptionD')}>Opción D</button>
      </div>
      <div>
      {objects.map(object => (
        <div key={object.id}>
          <label>
            <input
              type="checkbox"
              checked={object.seleccionado || false}
              onChange={event => handleCheckboxChange(event, object.id)}
            />
            {object.name}
          </label>
        </div>
      ))}
      <button onClick={handleEliminarClick}>Eliminar</button>
    </div>
    </>
  );
};

export default DashboardPage;




import React, { useState } from 'react';

const DashboardPage = () => {
  const [objects, setObjects] = useState([
    { id: 1, name: 'Producto 1', prices: { priceOptionA: 10, priceOptionB: 11, priceOptionC: 12, priceOptionD: 13 }, selectedPrice: null },
    { id: 2, name: 'Producto 2', prices: { priceOptionA: 20, priceOptionB: 21, priceOptionC: 22, priceOptionD: 23 }, selectedPrice: null },
    { id: 3, name: 'Producto 3', prices: { priceOptionA: 30, priceOptionB: 31, priceOptionC: 32, priceOptionD: 33 }, selectedPrice: null },
    { id: 2, name: 'Producto 2', prices: { priceOptionA: 40, priceOptionB: 41, priceOptionC: 42, priceOptionD: 43 }, selectedPrice: null },
    { id: 3, name: 'Producto 3', prices: { priceOptionA: 50, priceOptionB: 51, priceOptionC: 52, priceOptionD: 53 }, selectedPrice: null },
  ]);

  const handleOptionClick = (option) => {
    const updatedObjects = objects.map((object) => ({
      ...object,
      selectedPrice: object.prices[option],
    }));
    setObjects(updatedObjects);
    console.log(updatedObjects);
  };

  return (
    <div>
      <button onClick={() => handleOptionClick('priceOptionA')}>Opción A</button>
      <button onClick={() => handleOptionClick('priceOptionB')}>Opción B</button>
      <button onClick={() => handleOptionClick('priceOptionC')}>Opción C</button>
      <button onClick={() => handleOptionClick('priceOptionD')}>Opción D</button>
    </div>
  );
};

export default DashboardPage;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.boardgameatlas.com/api/search?limit=100&client_id=AUi6AFUDNI')
      .then(res => {
        const filteredGames = res.data.games.filter(game => game.name); // Filtrar los juegos que tienen el campo name
        const gameNames = filteredGames.map(game => game.name);
        setGames(gameNames);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGames = games.filter(game => game.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Search for a game</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter a game name"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <ul>
          {filteredGames.map((gameName, index) => (
            <li key={index}>{gameName}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardPage;



}*/