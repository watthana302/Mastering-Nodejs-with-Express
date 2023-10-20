import logo from './logo.svg';
import './App.css';

import React from 'react';
import WeatherCard from './components/WeatherCard';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';

import AddWeatherData from './components/AddWeatherdata';





function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes> {/* Use Routes instead of Route */}
            <Route path="/" element={< WeatherCard/>} /> 
            <Route path="/AddWeatherData" element={< AddWeatherData/>} />
            
          </Routes>
    </div>
  );
}

export default App;
