import React from "react";
import "./App.css";
import "./CurrentWeather.css";
import Search from "./Search.js";
import "./Search.css";
import DevDetails from "./DevDetails";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <DevDetails />
      </div>
    </div>
  );
}

export default App;
