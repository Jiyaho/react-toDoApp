import { useEffect, useState } from 'react';
import styles from '../css/WeatherAPI.module.css';

function WeatherAPI() {
  const [coords, setCoords] = useState();
  const [temp, setTemp] = useState();
  const [country, setCountry] = useState();
  const [icon, setIcon] = useState();
  const apiKey = process.env.REACT_APP_API_KEY;

  function handleGeoSucc(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { latitude, longitude };
    setCoords(coordsObj);
    getWeather(latitude, longitude);
  };

  function handleGeoErr(err) {
    console.log("Geolocation is error! " + err);
  };

  function requestCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
  };

  function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const getIcon = data.weather[0].icon;
        setIcon(`/assets/weatherIcon/${getIcon}.png`);
        setTemp(`${data.weather[0].main}, ${data.main.temp}℃ / `);
        setCountry(`${data.name} ${data.sys.country}`);
      })
  };

  useEffect(() => {
    requestCoords();
  }, []);
  
  return (
    <div className={styles.container}>
      <img src={icon} alt="iconImg" />
      <span>{temp}</span>
      <span>{country}</span>
    </div>
  )
};

export default WeatherAPI;
