import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Details;
