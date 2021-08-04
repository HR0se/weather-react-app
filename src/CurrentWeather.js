import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response);
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <ul>
          <li className="current-location-icon">
            <div className="currentLocation">
              <span id="current-location">London, UK</span>
              <img
                src=" http://openweathermap.org/img/wn/10d@2x.png"
                alt="rain"
                id="current-weather-icon"
              />
            </div>
          </li>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="current-temperature">
            <div className="row">
              <div className="temperature col-sm-7 col-lg-3">
                <span id="current-temperature-value">
                  {Math.round(weatherData.temperature)}
                </span>
                <small>
                  <a href="/">°C</a>|
                  <a href="/" className="active">
                    °F
                  </a>
                </small>
              </div>
              <div className="windSpeedHumidity col-sm-5 col-lg-9">
                <ul>
                  <li>
                    Wind Speed: <span>{Math.round(weatherData.windSpeed)}</span>
                    m/s
                  </li>
                  <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li
            id="current-description"
            className="current-description text-capitalize"
          >
            {weatherData.description}
          </li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "45526f214a1657311e19c90163a6ab34";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
