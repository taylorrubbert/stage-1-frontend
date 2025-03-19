import React from "react";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch} className="search__bar">
      <div className="search__bar_wrapper">
        <input
          name="pokemonName"
          type="text"
          placeholder="Enter a Pokemon name or ID"
          className="search__bar_input"
        />
        <button type="submit" className="search__bar_button">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
