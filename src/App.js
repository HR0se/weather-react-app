import React from "react";
import "./App.css";
import "./CurrentWeather.css";
import "./CurrentTemperature.css";
import Search from "./Search.js";
import "./Search.css";
import Forecast from "./Forecast.js";
import "./Forecast.css";
import DevDetails from "./DevDetails";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Forecast />
        <DevDetails />
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/those-icons"
            title="Those Icons"
          >
            Those Icons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
