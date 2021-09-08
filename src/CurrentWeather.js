import React from "react";
import CurrentTemperature from "./CurrentTemperature";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  if (props.data.ready) {
    const codeMapping = {
      "01d": 0,
      "01n": 1,
      "02d": 2,
      "02n": 3,
      "03d": 4,
      "03n": 4,
      "04d": 5,
      "04n": 5,
      "09d": 6,
      "09n": 6,
      "10d": 7,
      "10n": 8,
      "11d": 9,
      "11n": 9,
      "13d": 10,
      "13n": 10,
      "50d": 11,
      "50n": 11,
    };

    const icons = [
      "01d",
      "01n",
      "02d",
      "02n",
      "03d",
      "04d",
      "09d",
      "10d",
      "10n",
      "11d",
      "13d",
      "50d",
    ];

    return (
      <div className="CurrentWeather">
        <ul>
          <li className="current-location-icon">
            <div className="currentLocation">
              <span id="current-location">{props.data.cityName}</span>
              <img
                src={`/images/${icons[codeMapping[props.data.iconCode]]}.png`}
                alt={props.data.description}
                id="current-weather-icon"
              />
            </div>
          </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="current-temperature">
            <div className="row">
              <div className="temperature col-sm-7 col-lg-3">
                <CurrentTemperature temp={props.data.temperature} />
              </div>
              <div className="windSpeedHumidity col-sm-5 col-lg-9">
                <ul>
                  <li>
                    Wind Speed: <span>{Math.round(props.data.windSpeed)}</span>
                    m/s
                  </li>
                  <li>
                    Humidity: <span>{props.data.humidity}</span>%
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li
            id="current-description"
            className="current-description text-capitalize"
          >
            {props.data.description}
          </li>
        </ul>
      </div>
    );
  } else {
    return "Loading...";
  }
}
