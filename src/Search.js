import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-engine">
        <div className="row">
          <div className="searchInput col-md-5">
            <input
              type="text"
              placeholder="Please enter your city"
              className="search-bar-item search-bar"
              id="search-bar"
              autocomplete="off"
              autofocus="on"
            />
          </div>
          <div className="SearchButton col-md-3">
            <input
              type="submit"
              value="Search"
              className="search-button search-bar-item"
            />
          </div>
          <div className="LocationButton col-md-4">
            <button className="search-button search-bar-item">
              Current Location
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
