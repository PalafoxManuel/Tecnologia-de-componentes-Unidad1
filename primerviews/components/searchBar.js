import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../stylescomponents/styleSearchBar'; // Importa los estilos

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default SearchBar;