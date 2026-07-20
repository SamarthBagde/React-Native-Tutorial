import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Simple tab screen component with clear layout
export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
  },
});
