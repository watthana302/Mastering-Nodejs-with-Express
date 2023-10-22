import React, { useState } from 'react';
import './WeatherCard.css';
import axios from 'axios';


function WeatherCard() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [setEditModeIndex] = useState(-1); // New state for edit mode

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        ` http://localhost:5000/weathers/${searchTerm}`
      );
      setWeatherData([...weatherData, response.data]);
      setSearchTerm('');
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };



  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  

  const svgStyle = {
    preserveAspectRatio: 'xMidYMid slice',
    viewBox: '10 10 80 80',
  };



  const updateWeather = async (index) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/weathers/${searchTerm}`
      );

      const updatedWeatherData = [...weatherData];
      updatedWeatherData[index] = response.data;
      setWeatherData(updatedWeatherData);
      setEditModeIndex(-1); // Exit edit mode
    } catch (error) {
      console.error('Error updating weather:', error);
    }
  };
  const deleteWeather = async (index) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/weathers/${index}`
      );
  
      const updatedWeatherData = [...weatherData];
      updatedWeatherData.splice(index, 1);
      setWeatherData(updatedWeatherData);
    } catch (error) {
      console.error('Error delete weather:', error);
    }
  };

  return (
    <div className="weather-container">


      <div className="weather-box">
        <nav className="navbar">
          <h1>Winny-Weather</h1>
        </nav>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <div className='GetButton'>
            <button onClick={fetchWeather}>Get Weather</button>
          </div>
        </div>

        {searchTerm && <h1>Weather Information</h1>}
        {(
          <div>
            <ul>
              {weatherData.map((city, index) => (
                <div key={index} className="city-info">
                  <div>
                    {/* Input fields for editing */}
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <button onClick={() => updateWeather(index)}>Save</button>
                  </div>
                  <p>
                    {city.name}, {city.country}
                  </p>
                  <ul>
                    <p>Weather: {city.weather}</p>
                    <p>Temperature: {city.temp}</p>
                    <p>Humidity: {city.humidity}</p>
                    <p>Pressure: {city.pressure}</p>
                    <p>Wind Speed: {city.speed}</p>
                  </ul>
                  <div className="action-buttons">


                    <button onClick={() => deleteWeather(index)}>Delete</button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <svg
          style={svgStyle}
          dangerouslySetInnerHTML={{
            __html: `
          <svg preserveAspectRatio="xMidYMid slice" style="width: 100%; height: 100%;" viewBox="10 10 80 80">
            <defs>
                <style>
                    @keyframes rotate {
                      0% {
                          transform: rotate(0deg);
                      }
                      100% {
                          transform: rotate(360deg);
                      }
                    }
                    .out-top {
                        animation: rotate 20s linear infinite;
                        transform-origin: 13px 25px;
                    }
                    .in-top {
                        animation: rotate 10s linear infinite;
                        transform-origin: 13px 25px;
                    }
                    .out-bottom {
                        animation: rotate 25s linear infinite;
                        transform-origin: 84px 93px;
                    }
                    .in-bottom {
                        animation: rotate 15s linear infinite;
                        transform-origin: 84px 93px;
                    }
                </style>
            </defs>
            <path fill="#3466AA" class="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
            <path fill="#114084" class="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
            <path fill="#82B7DC" class="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
            <path fill="#114084" class="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
          </svg>
        `,
          }}
        />
      </div>
    </div>
  );
}

export default WeatherCard;