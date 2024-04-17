import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Title from './Components/Title';
import SearchInput from './Components/Input';
import Button from './Components/Button';

const { width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Title text="PokeApi" />
      <View style={styles.inputRow}>
        <SearchInput placeholder="Buscar..." style={styles.input} />
        <Button title="Buscar" onPress={() => console.log('Buscar')} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default App;