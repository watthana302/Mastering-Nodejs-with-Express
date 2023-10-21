import React, { useState } from 'react';
import axios from 'axios';

const AddweatherData = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [pressure, setPressure] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [weather, setWeather] = useState('');

  const handlePostData = () => {
    const data = {
      name: city,
      country: country,
      temp: temperature,
      weather: weather,
      humidity: humidity,
      pressure: pressure,
      speed: windSpeed
    };

    axios.post('http://localhost:5000/products', data)
      .then(response => {
        console.log('Data sent successfully', response);
      })
      .catch(error => {
        console.error('Error sending data', error);
      });
  };

  return (
    <div style={{
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;" viewBox="10 10 80 80">
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
                </svg>`
      )}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
    }}>
      <div className='InputAdd'>

        <input type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)} />
        <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <input type="text" placeholder="Temperature" onChange={(e) => setTemperature(e.target.value)} />
        <input type="text" placeholder="Weather" onChange={(e) => setWeather(e.target.value)} />
        <input type="text" placeholder="Humidity" onChange={(e) => setHumidity(e.target.value)} />
        <input type="text" placeholder="Pressure" onChange={(e) => setPressure(e.target.value)} />
        <input type="text" placeholder="Wind Speed" onChange={(e) => setWindSpeed(e.target.value)} />

        <button onClick={handlePostData}>Send Data</button>
      </div>
    </div>
  );
};

export default AddweatherData;
