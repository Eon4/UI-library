import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Homepage from './Pages/HomePage/homePage'; 
import Gallery  from './Pages/Gallery/gallery'; 
import AboutPage from './Pages/About/about';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
             path="/"
              element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<Gallery />} />
              {/* ... rest of the code */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

