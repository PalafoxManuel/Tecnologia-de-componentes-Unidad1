import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCardcss.css'; 

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=80'
      );
      const pokemonList = await Promise.all(
        result.data.results.map(async pokemon => {
          const response = await axios.get(pokemon.url);
          const speciesResponse = await axios.get(response.data.species.url);
          const description = speciesResponse.data.flavor_text_entries.find(entry => entry.language.name === 'en');
          return { ...response.data, type: response.data.types[0].type.name, description: description.flavor_text };
        })
      );
      setPokemonData(pokemonList);
    };
    fetchData();
  }, []);

  const getTypeColor = type => {
    switch (type) {
      case 'normal':
        return 'lightgray';
      case 'fighting':
        return 'brown';
      case 'flying':
        return 'skyblue';
      case 'poison':
        return 'purple';
      case 'ground':
        return 'saddlebrown';
      case 'rock':
        return 'gray';
      case 'bug':
        return 'olive';
      case 'ghost':
        return 'darkslategray';
      case 'steel':
        return 'dimgray';
      case 'fire':
        return 'orangered';
      case 'water':
        return 'deepskyblue';
      case 'grass':
        return 'limegreen';
      case 'electric':
        return 'gold';
      case 'psychic':
        return 'magenta';
      case 'ice':
        return 'lightcyan';
      case 'dragon':
        return 'royalblue';
      case 'dark':
        return 'darkgray';
      case 'fairy':
        return 'pink';
      default:
        return 'gray';
    }
  };

  return (
    <div className="pokemon-container">
      {pokemonData.map((pokemon, index) => (
        <div key={index} className="pokemon-card" style={{ backgroundColor: getTypeColor(pokemon.type) }}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{pokemon.description}</p> {/* Mostrar la descripción del Pokémon */}
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
