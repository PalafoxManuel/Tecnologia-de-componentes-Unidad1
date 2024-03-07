import React, { useState } from 'react';
import Button from './ButtonSearch';

const SearchPokemon = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Pokémon por nombre"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button onClick={handleSearch} text="Buscar" />
    </div>
  );
};

export default SearchPokemon;
