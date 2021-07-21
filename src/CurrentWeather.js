import React from "react";
import WindSpeedHumidity from "./WindSpeedHumidity.js";
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
            <div className="Temperature col-sm-7 col-lg-3">
              <span id="current-temperature-value">{props.temperature}</span>
              <small>
                <a href="/">°C</a>|
                <a href="/" className="active">
                  °F
                </a>
              </small>
            </div>
            <WindSpeedHumidity windSpeed={15} humidity={25} />
          </div>
        </li>
        <li id="current-description" className="current-description">
          Rain
        </li>
      </ul>
    </div>
  );
}
