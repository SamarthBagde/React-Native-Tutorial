import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={[styles.container]}>
        <View style={[styles.card]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    height: 100,
    width: 100,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c3ecf0',
  },
});

export default FlatCards;
