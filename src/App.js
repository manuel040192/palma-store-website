import React from 'react';
import './App.css';
import SearchAppBar from './components/Search_App_Bar';
import Images from './components/Images';
import PrimarySearchAppBar from './components/Icons_App_Bar';
import Header from './components/Navbar_Transparent';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
