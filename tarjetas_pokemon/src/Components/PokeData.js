import React from 'react';
import '../cssComponents/PokeDatacss.css';

const PokeData = ({ pokemon }) => {
  return (
    <div className="poke-data-container">
      <h3>Detalles:</h3>
      <p className="poke-data-item">Altura: {pokemon.height}</p>
      <p className="poke-data-item">Peso: {pokemon.weight}</p>
      <p className="poke-data-item">Evoluciones:</p>
      <ul>
        {pokemon.evolutions && pokemon.evolutions.map((evolution, index) => (
          <li key={index} className="poke-data-item">{evolution.species.name}</li>
        ))}
      </ul>
      <p className="poke-data-item">Tipos:</p>
      <ul>
        {pokemon.types && pokemon.types.map((type, index) => (
          <li key={index} className="poke-data-item">{type.type.name}</li>
        ))}
      </ul>
      <p className="poke-data-item">Estadísticas:</p>
      <ul>
        {pokemon.stats && pokemon.stats.map((stat, index) => (
          <li key={index} className="poke-data-item">{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeData;
