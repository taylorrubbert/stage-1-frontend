import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import News from "../News/News";
import Main from "../Main/Main";
import getPokemonData from "../../utils/pokeAPI";
import "./app.css";

function App() {
  const [pokemonData1, setPokemonData1] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [pokemonData2, setPokemonData2] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [side, setSide] = useState(true);

  const fetchPokemonData = async (pokemon, side) => {
    setSide(side);
    if (side === "Left") {
      setLoading1(true);
    } else {
      setLoading2(true);
    }
    try {
      const data = await getPokemonData({ pokemon });
      if (side === "Left") {
        setPokemonData1(data);
      } else if (side === "Right") {
        const data = await getPokemonData({ pokemon });
        setPokemonData2(data);
      }
    } catch (err) {
      window.alert("Try a different name or ID.");
    } finally {
      if (side === "Left") {
        setLoading1(false);
      } else {
        setLoading2(false);
      }
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
                fetchPokemonData={fetchPokemonData}
                pokemonData1={pokemonData1}
                loading1={loading1}
                pokemonData2={pokemonData2}
                loading2={loading2}
                side={side}
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
