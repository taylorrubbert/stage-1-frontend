import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
import { getPokemonData1, getPokemonData2 } from "../../utils/pokeAPI";

const Main = ({
  fetchPokemonData1,
  fetchPokemonData2,
  pokemonData1,
  pokemonData2,
  loading1,
  loading2,
}) => {
  return (
    <div className="pokemon__grid">
      <div className="pokemon__grid-column">
        <SearchBar
          onSearch={(e) => {
            e.preventDefault();
            const pokemonName = e.target.elements.pokemonName.value.trim();
            if (pokemonName) fetchPokemonData1(pokemonName);
          }}
        />
        {pokemonData1 && (
          <PokemonCard pokemon={pokemonData1} loading={loading1} />
        )}
      </div>
      <div className="pokemon__grid-column">
        <SearchBar
          onSearch={(e) => {
            e.preventDefault();
            const pokemonName = e.target.elements.pokemonName.value.trim();
            if (pokemonName) fetchPokemonData2(pokemonName);
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
