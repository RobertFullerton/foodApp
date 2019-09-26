import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather} from '@expo/vector-icons'; {/* taken from https://expo.github.io/vector-icons/ */}
const SearchBar = () => {
  return ( 
    <View style={styles.backStyle}>
      <Feather name="search" size={30} /> 
    {/* name="" is taken from vector-icons */}
      <TextInput style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    margin: 15,
    flexDirection:'row'
  },
   inputStyle: {
     borderColor: 'black',
     borderWidth: 1,
     flex: 1
   }
});

export default SearchBar;