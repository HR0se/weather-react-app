import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather.js";
import "./CurrentWeather.css";
import Search from "./Search.js";
import "./Search.css";
import "./Temperature.css";
import "./WindSpeedHumidity.css";
import "./CurrentLocation.css";
import DevDetails from "./DevDetails";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather temperature={10} windSpeed={15} humidity={25} />
        <Search />
        <DevDetails />
      </div>
    </div>
  );
}

export default App;
