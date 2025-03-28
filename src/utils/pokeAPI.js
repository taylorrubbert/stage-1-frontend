export default async function getPokemonData(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}`;
  console.log(pokemon);
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
