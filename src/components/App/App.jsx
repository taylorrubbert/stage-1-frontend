import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import News from "../News/News";
import Main from "../Main/Main";
import { getPokemonData1, getPokemonData2 } from "../../utils/pokeAPI";
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
          <Route
            path="/"
            element={
              <Main
                fetchPokemonData1={fetchPokemonData1}
                pokemonData1={pokemonData1}
                loading1={loading1}
                fetchPokemonData2={fetchPokemonData2}
                pokemonData2={pokemonData2}
                loading2={loading2}
              />
            }
          />
          <Route path="/News" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
