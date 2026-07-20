import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Screen3'>;

export default function Screen3({ navigation }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Screen 3</Text>
      <Text style={styles.description}>End of stack flow.</Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Pop to Top (Home)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Profile' as any, { userId: 'user_123' })}
      >
        <Text style={styles.buttonSecondaryText}>Switch to Profile Tab</Text>
      </TouchableOpacity>

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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  buttonPrimary: {
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
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#5856D6',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonSecondaryText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonOutline: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d1d6',
    marginBottom: 12,
  },
  buttonOutlineText: {
    color: '#3a3a3c',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
