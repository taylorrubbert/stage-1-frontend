import React from "react";
import "./pokemonCard.css";

const PokemonCard = ({ pokemon, loading }) => {
  if (loading) {
    return (
      //put a default loading card here
      <div></div>
    );
  }

  if (!pokemon) return null;
  const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ");
  const abilities = pokemon.abilities
    .map((abilityInfo) => abilityInfo.ability.name)
    .join(", ");
  const { id } = pokemon;

  return (
    <div className="pokemon__card">
      <div className="pokemon__card_image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon__card_info">
        <h2 className="pokemon__card_name">
          {pokemon.name} (#{id})
        </h2>
        <p className="pokemon_card__type">Type: {types}</p>
        <p className="pokemon_card__ability">Abilities: {abilities}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
