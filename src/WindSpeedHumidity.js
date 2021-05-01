import React from "react";

export default function WindSpeedHumidity(props) {
  return (
    <div className="WindSpeedHumidity col-sm-5 col-lg-9">
      <ul>
        <li>
          Wind Speed: <span>{props.windSpeed}</span>m/s
        </li>
        <li>
          Humidity: <span>{props.humidity}</span>%
        </li>
      </ul>
    </div>
  );
}
