import React, { useState } from 'react';

const SearchPokemon = ({ setSearchTerm }) => {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Pokémon por nombre"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchPokemon;