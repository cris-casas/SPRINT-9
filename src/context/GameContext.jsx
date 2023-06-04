import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GameContext = createContext();

const GameProvider = ({ children }) => {

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

 // const navigate = useNavigate();

  const handleOptionClick = (option) => {
    
    const updatedObjects = objects.map((object) => ({
      ...object,
      selectedPrice: object.prices[option],
    }));
    setObjects(updatedObjects);
    console.log(updatedObjects);
   // navigate('/objects');
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
    <GameContext.Provider
      value={{
        objects,
        storages,
        showTable,
        winningPlayer,
        handleOptionClick,
        handleCheckboxChange,
        handleEliminarClick,
        handleStorage,
        handleInputChange,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;