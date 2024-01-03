
import React from 'react';
import { Link } from 'react-router-dom';
// import style from '../../Pages/NotFoundPage/notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={style.notFound}>
      <h2>404 Not found</h2>
      <p>An unknown error occurred</p>
      <Link to="/">Click here to go back</Link>
    </section>
  );
};

export default NotFoundPage;
