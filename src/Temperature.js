import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature col-sm-7 col-lg-3">
      <span id="current-temperature-value">{props.value}</span>
      <small>
        <a href="/">°C</a>|
        <a href="/" className="active">
          °F
        </a>
      </small>
    </div>
  );
}
