import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import LocationButton from "./LocationButton";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-engine">
        <div className="row">
          <SearchInput />
          <SearchButton />
          <LocationButton />
        </div>
      </form>
    </div>
  );
}
