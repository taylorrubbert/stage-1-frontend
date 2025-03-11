import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  getPokemonData1,
  getPokemonData2,
  getRandomPokemon,
} from "../../utils/pokeAPI";
import SearchBar from "../SearchBar/SearchBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import News from "../News/News";
import "./app.css";

function App() {
  const [pokemonData1, setPokemonData1] = useState(null);
  const [pokemonData2, setPokemonData2] = useState(null);

  const cleanDescription = (description) => description.replace(/\f/g, " ");
  const fetchPokemonData1 = (pokemonName) =>
    getPokemonData1({ pokemon: pokemonName }).then(({ pokemon }) => {
      setPokemonData1({
        ...pokemon,
        description: cleanDescription(pokemon.description),
      });
    });

  const fetchPokemonData2 = (pokemonName) =>
    getPokemonData2({ pokemon: pokemonName }).then(({ pokemon }) => {
      setPokemonData2({
        ...pokemon,
        description: cleanDescription(pokemon.description),
      });
    });

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Routes>
          <Route path="/" element={SearchBar} />
          <Route path="/news" element={News} />
        </Routes>
        <SearchBar
          onSearch={(e) => {
            e.preventDefault();
            const pokemonName = e.target.elements.pokemonName.value.trim();
            if (pokemonName) fetchPokemonData1(pokemonName);
          }}
        />
        <SearchBar
          onSearch={(e) => {
            e.preventDefault();
            const pokemonName = e.target.elements.pokemonName.value.trim();
            if (pokemonName) fetchPokemonData2(pokemonName);
          }}
        />
        {pokemonData1 && <PokemonCard />}
        {pokemonData2 && <PokemonCard />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
