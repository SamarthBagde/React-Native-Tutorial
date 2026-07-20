import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ElevatedCards = () => {
  const cards = [
    { title: 'Elevated', color: '#EF4444', emoji: '✨' },
    { title: 'Scroll', color: '#3B82F6', emoji: '📜' },
    { title: 'Me', color: '#10B981', emoji: '🚀' },
    { title: 'To', color: '#F59E0B', emoji: '⚡' },
    { title: 'See', color: '#8B5CF6', emoji: '🎨' },
    { title: 'More', color: '#EC4899', emoji: '🌟' },
  ];

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {cards.map((item, index) => (
          <View key={index} style={[styles.card, styles.cardElevated, { borderTopColor: item.color, borderTopWidth: 4 }]}>
            <Text style={styles.cardEmoji}>{item.emoji}</Text>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

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
  scrollContainer: {
    paddingHorizontal: 12,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 12,
    marginHorizontal: 4,
    backgroundColor: '#FFFFFF',
  },
  cardElevated: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
});
