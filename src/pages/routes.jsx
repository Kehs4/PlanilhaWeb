import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Clientes from './clientes';


const AppRoutes = () => {
  return (
    <Routes>
      <Route index path='*' element={<Home />} /> 
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  );
};

export default AppRoutes;