import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssComponents/PokemonCardcss.css'; 
import SearchPokemon from './SearchPokemon';
import Button from './ButtonSearch'; 
import '../cssComponents/ButtonSearchcss.css';
import PokeData from './PokeData'; // Importa el componente PokeData

const PokemonCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [showDetails, setShowDetails] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        const descriptionResponse = await axios.get(response.data.species.url);
        const description = descriptionResponse.data.flavor_text_entries.find(entry => entry.language.name === 'en');
        // Almacenar los datos del Pokemon directamente en el estado searchedPokemon
        setSearchedPokemon({ ...response.data, description: description.flavor_text });
        setShowDetails(false); 
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

  const handleToggleDetails = () => {
    setShowDetails(!showDetails); 
  };

  return (
    <div>
      <SearchPokemon onSearch={handleSearch} /> {}
      <div className="pokemon-container">
        {searchedPokemon && (
          <div className="pokemon-card" style={{ backgroundColor: getTypeColor(searchedPokemon.types[0].type.name) }}>
            <h2>{searchedPokemon.name}</h2>
            <img src={searchedPokemon.sprites.front_default} alt={searchedPokemon.name} />
            <p>{searchedPokemon.description}</p>
            <Button onClick={handleToggleDetails} text={showDetails ? 'Ocultar detalles' : 'Ver más'} className={"button-ver-mas"} />
          </div>
        )}
        {showDetails && searchedPokemon && (
          <PokeData pokemon={searchedPokemon} />
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
