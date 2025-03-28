import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
import "./main.css";

const Main = ({
  fetchPokemonData,
  pokemonData1,
  loading1,
  pokemonData2,
  loading2,
}) => {
  return (
    <div className="pokemon-grid">
      <div className="pokemon-grid__column">
        <SearchBar
          onSearch={(e) => {
            e.preventDefault();
            const pokemonName = e.target.elements.pokemonName.value.trim();
            if (pokemonName) fetchPokemonData(pokemonName, "Left");
          }}
        />
        {pokemonData1 && (
          <PokemonCard pokemon={pokemonData1} loading={loading1} />
        )}
      </div>
      <div className="pokemon-grid__column">
        <SearchBar
          onSearch={(e) => {
            e.preventDefault();
            const pokemonName = e.target.elements.pokemonName.value.trim();
            if (pokemonName) fetchPokemonData(pokemonName, "Right");
          }}
        />
        {pokemonData2 && (
          <PokemonCard pokemon={pokemonData2} loading={loading2} />
        )}
      </div>
    </div>
  );
};

export default Main;
