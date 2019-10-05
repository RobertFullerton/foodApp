import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View>
    <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
    <Text style={styles.businessName}>{result.name}</Text>
    <Text style={styles.review}>{result.rating} Stars, {result.review_count} Reviews </Text>
    </View>
    );
  };

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginRight: 20,
    alignItems: 'center'
  },
   businessName: {
     fontWeight: 'bold',
     fontSize: 16,
     margin: 3,
     textAlign: 'center'
   },
    review: {
      color: 'gray',
      fontSize: 12,
      textAlign: 'center'
    }
});

export default ResultsDetail;