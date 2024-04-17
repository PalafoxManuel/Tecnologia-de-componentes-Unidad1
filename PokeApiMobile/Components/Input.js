import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './InputStyles';

const SearchInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default SearchInput;
