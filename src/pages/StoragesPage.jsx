import React, { useState } from 'react';

const DashboardPage = () => {
  const [objects, setObjects] = useState([
    { id: 1, name: 'Object 1', prices: { priceOptionA: 10, priceOptionB: 11, priceOptionC: 12, priceOptionD: 13 }, selectedPrice: null, storage: ['Storage 1','Storage 2','Storage 3'] },
    { id: 2, name: 'Object 2', prices: { priceOptionA: 20, priceOptionB: 21, priceOptionC: 22, priceOptionD: 23 }, selectedPrice: null, storage: ['Storage 1','Storage 3'] },
    { id: 3, name: 'Object 3', prices: { priceOptionA: 30, priceOptionB: 31, priceOptionC: 32, priceOptionD: 33 }, selectedPrice: null, storage: ['Storage 2','Storage 3'] },
    { id: 4, name: 'Object 4', prices: { priceOptionA: 40, priceOptionB: 41, priceOptionC: 42, priceOptionD: 43 }, selectedPrice: null, storage: ['Storage 2','Storage 3'] },
    { id: 5, name: 'Object 5', prices: { priceOptionA: 50, priceOptionB: 51, priceOptionC: 52, priceOptionD: 53 }, selectedPrice: null, storage: ['Storage 1','Storage 2','Storage 3'] },
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

  const [selectedStorage, setSelectedStorage] = useState(null);

  const handleStorage = (storage) => {
    const filteredObjects = objects.filter(object => object.storage.includes(storage));
    const totalSelectedPrice = filteredObjects.reduce((sum, object) => sum + object.selectedPrice, 0);
  
    const selectedStorage = {
      storage,
      objects: filteredObjects.map(object => ({
        name: object.name,
      })),
      totalSelectedPrice,
    };
  
    setSelectedStorage(selectedStorage);
    console.log(selectedStorage);
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
      <div>
        <button onClick={() => handleStorage('Storage 1')}>Storage 1</button>
        <button onClick={() => handleStorage('Storage 2')}>Storage 2</button>
        <button onClick={() => handleStorage('Storage 3')}>Storage 3</button>
      </div>
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