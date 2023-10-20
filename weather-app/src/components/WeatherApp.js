// WeatherApp.js
import React, { useState } from 'react';
import AddWeatherData from './AddWeatherdata';

const WeatherApp = () => {
  const [weatherDataList, setWeatherDataList] = useState([]);

  const handleAddWeatherData = (newWeatherData) => {
    setWeatherDataList([...weatherDataList, newWeatherData]);
  };

  return (
    <div>
      <h1>แอพพลิเคชันสภาพอากาศ</h1>
      <AddWeatherData onAddWeatherData={handleAddWeatherData} />
      <h2>รายการข้อมูลสภาพอากาศ</h2>
      <ul>
        {weatherDataList.map((data, index) => (
          <li key={index}>{data.name}, {data.country}, {data.temp}, {data.weather}, {data.humidity}, {data.pressure}, {data.speed}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherApp;
