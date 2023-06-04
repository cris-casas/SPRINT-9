import React from 'react'
import TableStorage from '../components/TableStorage';
import Winner from '../components/Winner';
import StartButton from '../components/StartButton';

const ResultsPage = () => {
  return (
    <>
        <TableStorage />
        <Winner />
        <StartButton />
    </>
  )
}

export default ResultsPage;