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

/*{

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



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState('');

  useEffect(() => {
    axios.get('https://api.boardgameatlas.com/api/search?limit=100&client_id=AUi6AFUDNI')
      .then(res => {
        const filteredGames = res.data.games.filter(game => game.name); // Filtrar los juegos que tienen el campo name
        const gameNames = filteredGames.map(game => game.name);
        setGames(gameNames);
        console.log(res);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  const handleGameSelection = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <select className="select select-bordered" value={selectedGame} onChange={handleGameSelection}>
          <option value="" disabled defaultValue>
            Pick one
          </option>
          {games.map((gameName, index) => (
            <option key={index} value={gameName}>
              {gameName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DashboardPage;






import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState('');

  useEffect(() => {
    axios.get('https://api.boardgameatlas.com/api/search?limit=100&client_id=AUi6AFUDNI')
      .then(res => {
        const filteredGames = res.data.games.filter(game => game.name); // Filtrar los juegos que tienen el campo name
        const gameNames = filteredGames.map(game => game.name);
        setGames(gameNames);
        console.log(res.data.games);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  const handleGameSelection = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <select className="select select-bordered" value={selectedGame} onChange={handleGameSelection}>
          <option value="" disabled defaultValue>
            Pick one
          </option>
          {games.map((gameName, index) => (
            <option key={index} value={gameName}>
              {gameName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DashboardPage;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {

  useEffect(() => {
    axios.get('https://api.boardgameatlas.com/api/search?limit=100&order_by=name&client_id=AUi6AFUDNI')
      .then(res => {
        const games = res.data.games.map(game => game.name);
        games.forEach(gameName => console.log(gameName));
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best fantasy franchise</span>
        <span className="label-text-alt">Alt label</span>
      </label>
      <select className="select select-bordered">
        <option disabled selected>Pick one</option>
        <option>Star Wars</option>
      </select>
      <label className="label">
        <span className="label-text-alt">Alt label</span>
        <span className="label-text-alt">Alt label</span>
      </label>
    </div>
      
    </>
  );
};

export default DashboardPage;




import React, { useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {

  useEffect(() => {
    axios.get('https://api.boardgameatlas.com/api/search?limit=100&client_id=AUi6AFUDNI')
      .then(res => {
        const games = res.data.games.map(game => game.name);
        console.log(games);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <>
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>Who shot first?</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
    </>
  );
};

export default DashboardPage;
}
*/
