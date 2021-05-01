import React from "react";
import Temperature from "./Temperature.js";
import WindSpeedHumidity from "./WindSpeedHumidity.js";
import CurrentLocation from "./CurrentLocation.js";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <ul>
        <li className="current-location-icon">
          <CurrentLocation />
        </li>
        <li className="current-temperature">
          <div className="row">
            <Temperature value={10} />
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
