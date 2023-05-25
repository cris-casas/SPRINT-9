import React, { useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  
  useEffect(() => {
    axios.get('https://api.boardgameatlas.com/api/search?client_id=AUi6AFUDNI')
      .then(res => {
        console.log(res.data.games);
      })
  }, []);


    return (
      <>
        <div>hola</div>
      </>
    )
  }
  
  export default DashboardPage;