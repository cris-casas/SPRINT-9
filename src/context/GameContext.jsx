import React, { useState, createContext, useEffect } from "react";
import objectsData from "../data/objectsData.json";

export const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [objects, setObjects] = useState(objectsData);

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

  return (
    <GameContext.Provider
      value={{
        objects,
        handleOptionClick,
        handleCheckboxChange,
        handleEliminarClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;