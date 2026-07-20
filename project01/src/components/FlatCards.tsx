import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlatCards = () => {
  const cards = [
    { title: 'Red', bg: '#EF4444', text: '#FFFFFF' },
    { title: 'Green', bg: '#10B981', text: '#FFFFFF' },
    { title: 'Blue', bg: '#3B82F6', text: '#FFFFFF' },
    { title: 'Yellow', bg: '#F59E0B', text: '#FFFFFF' },
  ];

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        {cards.map((card, index) => (
          <View key={index} style={[styles.card, { backgroundColor: card.bg }]}>
            <Text style={[styles.cardTitle, { color: card.text }]}>{card.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  card: {
    flex: 1,
    height: 90,
    borderRadius: 12,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
});
