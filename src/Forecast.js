import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col ForecastDay">
          <h3>Monday</h3>
          <img src="/images/01d.png" alt="weather icon"></img>
          <span>25°C 8m/s 45%</span>
        </div>
        <div className="col ForecastDay">
          <h3>Tuesday</h3>
          <img src="/images/01n.png" alt="weather icon"></img>
          <span>25°C 8m/s 45%</span>
        </div>
        <div className="col ForecastDay">
          <h3>Wednesday</h3>
          <img src="/images/02d.png" alt="weather icon"></img>
          <span>25°C 8m/s 45%</span>
        </div>
        <div className="col ForecastDay">
          <h3>Thursday</h3>
          <img src="/images/10d.png" alt="weather icon"></img>
          <span>25°C 8m/s 45%</span>
        </div>
        <div className="col ForecastDay">
          <h3>Friday</h3>
          <img src="/images/13d.png" alt="weather icon"></img>
          <span>25°C 8m/s 45%</span>
        </div>
      </div>
    </div>
  );
}
