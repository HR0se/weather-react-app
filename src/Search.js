import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function Search() {
  let [weatherData, setWeatherData] = useState({ ready: false });

  let [city, setCity] = useState("London");

  function search() {
    const apiKey = "45526f214a1657311e19c90163a6ab34";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      cityName: response.data.name,
      iconCode: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <CurrentWeather data={weatherData} />
        <form id="search-engine" onSubmit={handleSubmit}>
          <div className="row">
            <div className="searchInput col-md-5">
              <input
                type="text"
                placeholder="Please enter your city"
                className="search-bar-item search-bar"
                id="search-bar"
                autocomplete="off"
                autofocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="SearchButton col-md-3">
              <input
                type="submit"
                value="Search"
                className="search-button search-bar-item"
              />
            </div>
            <div className="LocationButton col-md-4">
              <button className="search-button search-bar-item">
                Current Location
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
