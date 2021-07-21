import React from "react";
import CurrentLocation from "./CurrentLocation.js";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <ul>
        <li className="current-location-icon">
          <CurrentLocation />
        </li>
        <li className="current-temperature">
          <div className="row">
            <div className="temperature col-sm-7 col-lg-3">
              <span id="current-temperature-value">{props.temperature}</span>
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
                  Wind Speed: <span>{props.windSpeed}</span>m/s
                </li>
                <li>
                  Humidity: <span>{props.humidity}</span>%
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li id="current-description" className="current-description">
          Rain
        </li>
      </ul>
    </div>
  );
}
