import React, { useState } from 'react';
import Clock from './Clock';
import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84593779d5b7068009642c1b0493f59d&units=metric`)
      setWeather({
        place: res.data.name,
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        windSpeed: res.data.wind.speed,
        description: res.data.weather[0].description
      });
    } catch (error) {
      setWeather(null);
      alert('Failed to fetch weather data')
    };
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!city) {
      alert('Please enter a city name')
    }
    getData();
  };

  return (
    <div className="App">
      <div className="nav">
        <div><h1 className='weatherApp'>Weather App</h1></div>
        <div className='inputDiv'>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="text" placeholder='Enter the city name:' value={city} onChange={handleChange} />
            </label>
            <button className='btn' type="submit">Search</button>
          </form>
        </div>
        <div><Clock /></div>
      </div>
      <div className="weather">
        <div className="data">
          {weather ? (
            <div className="tempDiv">
              <div className="temp"> {weather.temp} &#8451; <img src="https://cdn-icons-png.flaticon.com/512/1040/1040237.png" alt="img" className="wImg" /> </div>
              <div className="tempData">
                <h4>Location: {`${weather.place ? weather.place : '???'}`}</h4>
                <h4>Temperature: {weather.temp}&#8451;</h4>
                <h4>Humidity: {weather.humidity}%</h4>
                <h4>Wind Speed: {weather.windSpeed} km/h</h4>
                <h4>Atmosphere: {weather.description}</h4>
              </div>
            </div>
          ) : <img src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png" alt="img" width='400px' />}
        </div>
      </div>
    </div>
  );
}

export default App;
