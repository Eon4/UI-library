import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Homepage from './Pages/HomePage/homePage'; 
import Gallery  from './Pages/Gallery/gallery'; 
import AboutPage from './Pages/About/about';
import Contact from './Pages/Contact/contact';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
             path="/"
              element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

