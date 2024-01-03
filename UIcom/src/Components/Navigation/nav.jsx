// Navigation.jsx

import React from 'react';
import style from '../Navigation/nav.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={style.topnavigation}>
      <div className={style.logoContainer}>
        <h1 className={style.logo}>Navn her</h1>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      
      <div className={style.Container}>
        {/* Additional content if needed */}
      </div>
    </nav>
  );
};

export default Navigation;
