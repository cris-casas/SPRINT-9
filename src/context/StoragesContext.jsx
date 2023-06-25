import React, { useState, createContext, useEffect } from "react";
import Data from "../data/storagesData.json";

export const StoragesContext = createContext();

const StoragesProvider = ({ children }) => {

  const [storages, setStorages] = useState(Data);
  const [showTable, setShowTable] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState("");

  useEffect(() => {
    const savedStorages = localStorage.getItem("storages");
    if (savedStorages) {
      setStorages(JSON.parse(savedStorages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storages", JSON.stringify(storages));
  }, [storages]);

  useEffect(() => {
    // Establecer los valores iniciales de los campos de entrada
    const updatedStorages = storages.map((storage) => {
      const savedStorage = JSON.parse(localStorage.getItem(`storage-${storage.id}`));
      if (savedStorage) {
        return {
          ...storage,
          formData: savedStorage.formData,
        };
      }
      return storage;
    });
    setStorages(updatedStorages);
  }, []);

  // Storages
  
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
        const updatedStorage = {
          ...storage,
          formData: {
            ...storage.formData,
            [name]: value,
          },
        };
        localStorage.setItem(`storage-${storage.id}`, JSON.stringify(updatedStorage));
        return updatedStorage;
      }
      return storage;
    });
    setStorages(updatedStorages);
  };

  return (
    <StoragesContext.Provider
      value={{
        storages,
        showTable,
        winningPlayer,
        handleStorage,
        handleInputChange,
      }}
    >
      {children}
    </StoragesContext.Provider>
  );
};

export default StoragesProvider;