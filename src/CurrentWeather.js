import React from "react";
import FormattedDate from "./FormattedDate";
import sun from "./images/01d.png";
import moon from "./images/01n.png";
import fewCloudsDay from "./images/02d.png";
import fewCloudsNight from "./images/02n.png";
import scatteredClouds from "./images/03d.png";
import brokenClouds from "./images/04d.png";
import showers from "./images/09d.png";
import rainDay from "./images/10d.png";
import rainNight from "./images/10n.png";
import thunder from "./images/11d.png";
import snow from "./images/13d.png";
import fog from "./images/50d.png";

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
      { sun },
      { moon },
      { fewCloudsDay },
      { fewCloudsNight },
      { scatteredClouds },
      { brokenClouds },
      { showers },
      { rainDay },
      { rainNight },
      { thunder },
      { snow },
      { fog },
    ];

    console.log(codeMapping[props.data.iconCode]);

    console.log(icons[codeMapping[props.data.iconCode]]);

    console.log({ sun });

    return (
      <div className="CurrentWeather">
        <ul>
          <li className="current-location-icon">
            <div className="currentLocation">
              <span id="current-location">{props.data.cityName}</span>
              <img
                src={icons[codeMapping[props.data.iconCode]]}
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
