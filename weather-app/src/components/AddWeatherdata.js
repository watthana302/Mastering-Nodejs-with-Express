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
        // Define the data to be sent in the POST request
        const data = {
            name: city,
            country: country,
            temp: temperature,
            weather:weather,
            humidity: humidity,
            pressure: pressure,
            speed: windSpeed
        };

        // Make a POST request to the specified endpoint
        axios.post('http://localhost:5000/products', data)
            .then(response => {
                // Handle the response from the server
                console.log('Data sent successfully', response);
             
            })
            .catch(error => {
                // Handle any errors
                console.error('Error sending data', error);
            });
    };

    return (
        <div>
            <input type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)} />
            <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="Temperature" onChange={(e) => setTemperature(e.target.value)} />
            <input type="text" placeholder="Waether" onChange={(e) => setWeather(e.target.value)} />
            <input type="text" placeholder="Humidity" onChange={(e) => setHumidity(e.target.value)} />
            <input type="text" placeholder="Pressure" onChange={(e) => setPressure(e.target.value)} />
            <input type="text" placeholder="Wind Speed" onChange={(e) => setWindSpeed(e.target.value)} />

            <button onClick={handlePostData}>Send Data</button>
        </div>
    );
};

export default AddweatherData;