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
    <div className="app">
      <div className="app__container">
        <Header />
        <Routes>
          <Route path="/" element={SearchBar} />
          <Route path="/News" element={<News></News>} />
        </Routes>
        <table className="app__table">
          <tbody>
            <tr>
              <td>
                <SearchBar
                  onSearch={(e) => {
                    e.preventDefault();
                    const pokemonName =
                      e.target.elements.pokemonName.value.trim();
                    if (pokemonName) fetchPokemonData1(pokemonName);
                  }}
                />
                {pokemonData1 && <PokemonCard pokemon={pokemonData1} />}
              </td>
            </tr>
            <tr>
              <td>
                <SearchBar
                  onSearch={(e) => {
                    e.preventDefault();
                    const pokemonName =
                      e.target.elements.pokemonName.value.trim();
                    if (pokemonName) fetchPokemonData2(pokemonName);
                  }}
                />
                {pokemonData2 && <PokemonCard pokemon={pokemonData2} />}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default App;
