
import React from 'react';
import Navigation from '../Components/Navigation/nav';
import {Footer} from '../Components/Footer/footer'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div> 
       <Navigation />
         <main>
        <Outlet />
      </main>
     <Footer/>
   </div>
  );
};

export default MainLayout;