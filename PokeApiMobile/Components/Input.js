import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styles/SearchInputStyles';

const SearchInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => console.log(text)} // Puedes manejar el cambio de texto aquí
      />
    </View>
  );
};

export default SearchInput;
