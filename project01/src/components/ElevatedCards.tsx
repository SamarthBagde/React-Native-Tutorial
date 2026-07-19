import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.conatiner}>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  conatiner: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    margin: 4,
    backgroundColor: '#8ab5e7',
    borderRadius: 8,
  },
  cardElevated: {
    elevation: 4,
  },
});

export default ElevatedCards;
