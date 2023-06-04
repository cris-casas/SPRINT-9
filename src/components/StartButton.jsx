import React from 'react';
import { Link } from 'react-router-dom';

const StartButton = () => {

  return (
    <>
    <div className="max-w-md">
        <Link to='/price' className="link" >
            <button className="btn btn-outline">Start again</button>
        </Link>
    </div>
    </>
  );
};

export default StartButton;