import React from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  if (props.data.ready) {
    return (
      <div className="CurrentWeather">
        <ul>
          <li className="current-location-icon">
            <div className="currentLocation">
              <span id="current-location">{props.data.cityName}</span>
              <img
                src=" http://openweathermap.org/img/wn/10d@2x.png"
                alt="rain"
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
                <span id="current-temperature-value">
                  {Math.round(props.data.temperature)}
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
