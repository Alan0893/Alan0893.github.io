import React from 'react';
import { Link } from 'react-router-dom'; 
import {
  Container404,
  Header404,
  Separator,
  Text404
} from '../styles/styles';

const NotFound = () => {
  return (
    <div className={Container404}>
      <div className="text-center">
        <h1 className={Header404}>404</h1>
        <div className={Separator} />
        <p className="text-xl">Page Not Found</p>
        <Link to="/">
          <button className={Text404}>
            Go to Home Page
          </button>
        </Link>
        <img 
          src='/assets/images/404.svg'
          alt=''
          className='h-52 mt-5'
        />
      </div>
    </div>
  );
};

export default NotFound;
