import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './resultsDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
          }}
        />
      <Text> Results: {results.length}</Text>
    </View>
   );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;