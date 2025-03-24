import React from "react";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch} className="search-bar">
      <div className="search-bar__wrapper">
        <input
          name="pokemonName"
          type="text"
          placeholder="Enter a Pokemon name or ID"
          className="search-bar__input"
          required
        />
        <button type="submit" className="search-bar__button">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
