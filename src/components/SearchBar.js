import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather} from '@expo/vector-icons'; {/* taken from https://expo.github.io/vector-icons/ */}

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
  return ( 
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} /> 
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginTop: 10,
    height: 50,
    borderRadius: 10,
    margin: 15,
    flexDirection:'row'
  },
  inputStyle: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 19
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    margin: 15
  }
});

export default SearchBar;