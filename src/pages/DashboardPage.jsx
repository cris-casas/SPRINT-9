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
      <div>hola</div>
    </>
  );
};

export default DashboardPage;
