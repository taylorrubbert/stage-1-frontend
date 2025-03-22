import React, { useState } from "react";
import { getPokemonData1, getPokemonData2 } from "../../utils/pokeAPI";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
import "./main.css";

function Main() {
  const [pokemonData1, setPokemonData1] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [pokemonData2, setPokemonData2] = useState(null);
  const [loading2, setLoading2] = useState(false);

  const fetchPokemonData1 = async (pokemon) => {
    setPokemonData1(null);
    setLoading1(true);
    try {
      const data = await getPokemonData1({ pokemon });
      console.log(data);
      setPokemonData1(data);
      console.log(pokemonData1);
    } catch (err) {
      window.alert("Try a different name or ID.");
    } finally {
      setLoading1(false);
    }
  };

  const fetchPokemonData2 = async (pokemon) => {
    setPokemonData2(null);
    setLoading2(true);
    try {
      const data = await getPokemonData2({ pokemon });
      console.log(data);
      setPokemonData2(data);
      console.log(pokemonData1);
    } catch (err) {
      window.alert("Try a different name or ID.");
    } finally {
      setLoading2(false);
    }
  };

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
}

export default Main;
