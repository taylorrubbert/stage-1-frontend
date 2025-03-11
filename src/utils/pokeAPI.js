import { handleServerResponse } from "./api";

export const getPokemonData = ({ pokemon }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
    handleServerResponse
  );
};

export const getPokemonData1 = ({ pokemon }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
    handleServerResponse
  );
};

export const getPokemonData2 = ({ pokemon }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
    handleServerResponse
  );
};

export const getRandomPokemon = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=1").then(
    handleServerResponse
  );
};
