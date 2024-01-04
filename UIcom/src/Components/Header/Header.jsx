
import HeaderImg from "../../assets/img/greekheader.jpg";
import style from '../Header/Header.module.scss';


// HeaderHero.jsx
import React from 'react';

const HeaderHero = () => {
  return (
    <header>

            <img className={style.Headerimg} src={HeaderImg} alt="header" />
      <h1>Welcome to Our Website</h1>
      <p>Explore our amazing content and discover something new!</p>
      </header>

  );
};

export default HeaderHero;
