import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>React Native Navigation</Text>
      <Text style={styles.subtitle}>Select a navigation option to test:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen1', { stepCount: 1 })}
      >
        <Text style={styles.buttonText}>1. Go to Screen 1 (Stack Push & Pop)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Screen2', {
            message: 'Hello from Home Screen!',
          })
        }
      >
        <Text style={styles.buttonText}>2. Go to Screen 2 (Route Params)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 101,
            title: 'Product Details',
            category: 'Electronics',
            color: '#007AFF',
            description: 'This screen received data via route parameters.',
          })
        }
      >
        <Text style={styles.buttonText}>3. Go to Details (Dynamic Header)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Search' as any)}
      >
        <Text style={styles.buttonSecondaryText}>4. Jump to Search Tab</Text>
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
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: '#f2f2f7',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    marginBottom: 12,
  },
  buttonSecondaryText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
