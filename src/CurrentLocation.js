import React from "react";

export default function CurrentLocation() {
  return (
    <div className="CurrentLocation">
      <span id="current-location">London, UK</span>
      <img
        src=" http://openweathermap.org/img/wn/10d@2x.png"
        alt="rain"
        id="current-weather-icon"
      />
    </div>
  );
}
