import React, { useState, createContext, useEffect } from "react";
import data from "../data/objectsData.json";

export const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [objects, setObjects] = useState(data);

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
    
    const objetosFiltrados = updatedObjects.filter((object) => !object.seleccionado);
    localStorage.setItem("objects", JSON.stringify(objetosFiltrados));
  };
  
  useEffect(() => {
    // Recuperar los objetos del localStorage al cargar el componente
    const savedObjects = localStorage.getItem("objects");
    if (savedObjects) {
      const parsedObjects = JSON.parse(savedObjects);
      const filteredObjects = parsedObjects.filter(object => !object.seleccionado);
      setObjects(filteredObjects);
    }
  }, []);

  const handleEliminarClick = () => {
    const objetosFiltrados = objects.filter((object) => !object.seleccionado);
    setObjects(objetosFiltrados);
    localStorage.setItem("objects", JSON.stringify(objetosFiltrados));
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