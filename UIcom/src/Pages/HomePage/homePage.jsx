// Homepage.jsx
import React from 'react';
import HeaderHero from '../../Components/Header/Header';
import style from '../../Pages/HomePage/homePage.module.scss';

const Homepage = () => {
  return (
    <div>
      <HeaderHero />
      <div className={style.HomepageContainer}>
        {/* <p>
          Lalala
        </p> */}
      </div>
    </div>
  );
};

export default Homepage;
