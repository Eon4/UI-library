
import greekHeaderImage from "../../assets/img/greekheader.jpg";
import style from '../Header/Header.module.scss';


// HeaderHero.jsx
import React from 'react';

const HeaderHero = () => {
  return (
    <div className={style.heroContainer}>
            {/* <HeaderHero backgroundImage={greekHeaderImage} /> */}

      <h1>Welcome to Our Website</h1>
      <p>Explore our amazing content and discover something new!</p>
    </div>
  );
};

export default HeaderHero;
