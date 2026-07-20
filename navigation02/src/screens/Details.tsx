import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

export default function Details({ navigation, route }: Props) {
  // Extract route parameters passed to Details screen
  const { itemId, title, category, description } = route.params || {
    itemId: 0,
    title: 'Details',
    category: 'General',
    description: 'No description provided.',
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Item ID: #{itemId} • Category: {category}</Text>

      {/* Render parameters description */}
      <View style={styles.box}>
        <Text style={styles.boxText}>{description}</Text>
      </View>

      {/* Go back to Home */}
      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonOutlineText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  box: {
    backgroundColor: '#f2f2f7',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    marginBottom: 20,
  },
  boxText: {
    fontSize: 15,
    color: '#333333',
    lineHeight: 22,
  },
  buttonOutline: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d1d6',
  },
  buttonOutlineText: {
    color: '#3a3a3c',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
