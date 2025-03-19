import { handleServerResponse } from "./api";

export const getPokemonData = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
    handleServerResponse
  );
};

// export const getPokemonData1 = ({ pokemon }) => {
//   console.log(pokemon);
//   //const res = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//   console.log('still not broken');
//   //return handleServerResponse(res);
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
//     handleServerResponse
//   );
// };

export async function getPokemonData1(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}`;
  console.log(pokemon);
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getPokemonData2(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}`;
  console.log(pokemon);
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
