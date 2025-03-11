import React from "react";
import "./pokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;
  const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ");
  const abilities = pokemon.abilities
    .map((abilityInfo) => abilityInfo.ability.name)
    .join(", ");
  const { generation, description, id } = pokemon;

  return (
    <div className="pokemon__card">
      <div className="pokemon__card_image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon__card_info">
        <h2 className="pokemon__card_name">
          {pokemon.name} (#{id})
        </h2>
        <p className="pokemon-card__description">{description}</p>
        <p className="pokemon-card__generation">Generation: {generation}</p>
        <p className="pokemon-card__type">Type: {types}</p>
        <p className="pokemon-card__ability">Abilities: {abilities}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
