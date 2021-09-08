import React, { useState } from "react";

export default function CurrentTemperature(props) {
  let [units, setUnits] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheitTemperature() {
    return Math.round((props.temp * 9) / 5 + 32);
  }

  if (units === "celsius") {
    return (
      <div className="CurrentTemperature">
        <span id="current-temperature-value">{Math.round(props.temp)}</span>
        <small>
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |
          <a href="/" className="active" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <span id="current-temperature-value">{fahrenheitTemperature()}</span>
        <small>
          <a href="/" className="active" onClick={showCelsius}>
            °C
          </a>
          |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </div>
    );
  }
}
