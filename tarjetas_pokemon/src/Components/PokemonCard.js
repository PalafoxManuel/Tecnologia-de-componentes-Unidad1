import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../PokemonCardcss.css'; 
import SearchPokemon from './SearchPokemon';

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        const descriptionResponse = await axios.get(response.data.species.url);
        const description = descriptionResponse.data.flavor_text_entries.find(entry => entry.language.name === 'en');
        setSearchedPokemon([{ ...response.data, description: description.flavor_text }]);
      }
    };
    fetchData();
  }, [searchTerm]);

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

  const handleSearch = searchTerm => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchPokemon onSearch={handleSearch} /> {/* Incluye el componente de búsqueda */}
      <div className="pokemon-container">
        {searchedPokemon && searchedPokemon.map((pokemon, index) => (
          <div key={index} className="pokemon-card" style={{ backgroundColor: getTypeColor(pokemon.type) }}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
