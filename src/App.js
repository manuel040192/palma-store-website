import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GoodsRoute from './routes/GalleryGoods';
import PetsAndOwnersRoute from './routes/GalleryPetsOwners';
import WomenRoute from './routes/GalleryWomen';
import HomeRoute from './routes/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes basename='/palma-store-website/'>
        <Route path='/women' element={<WomenRoute />} />
        <Route path='/petsandowners' element={<PetsAndOwnersRoute />} />
        <Route path='/goods' element={<GoodsRoute />} />
        <Route path='/' element={<HomeRoute />} />
      </Routes>
    </div>
  );
}

export default App;
