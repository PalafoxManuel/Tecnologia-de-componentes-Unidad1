import React from 'react';

const PokeData = ({ pokemon }) => {
  return (
    <div className="poke-data">
      <h3>Detalles:</h3>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      {/* Agrega más detalles aquí según sea necesario */}
    </div>
  );
};

export default PokeData;
