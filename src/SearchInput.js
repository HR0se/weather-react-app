import React from "react";

export default function SearchInput() {
  return (
    <div className="SearchInput col-md-5">
      <input
        type="text"
        placeholder="Please enter your city"
        className="search-bar-item search-bar"
        id="search-bar"
        autocomplete="off"
        autofocus="on"
      />
    </div>
  );
}
