import React from 'react';
import { Link } from 'react-router-dom';
import { Slider } from "../../Components/Slider/Slider";

// import style from './gallery.module.scss';

export const Gallery = () => {


  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <div>
    {/* <h2>Gallery here</h2> */}

    <Slider />

    </div>
    
  );
};

export default Gallery;
