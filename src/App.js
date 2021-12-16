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
      <Routes basename='/'>
        <Route path=`{process.env.PUBLIC_URL}/women` element={<WomenRoute />} />
        <Route path=`{process.env.PUBLIC_URL}/petsandowners` element={<PetsAndOwnersRoute />} />
        <Route path=`{process.env.PUBLIC_URL}/goods` element={<GoodsRoute />} />
        <Route path=`{process.env.PUBLIC_URL}/` element={<HomeRoute />} />
      </Routes>
    </div>
  );
}

export default App;
