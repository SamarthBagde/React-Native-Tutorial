import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Screen1'>;

export default function Screen1({ navigation, route }: Props) {
  // Read passed stepCount parameter or default to 1
  const stepCount = route.params?.stepCount || 1;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Screen 1 (Level {stepCount})</Text>
      <Text style={styles.description}>
        Test navigation stack operations below:
      </Text>

      {/* Push adds a NEW instance of Screen1 onto the stack */}
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.push('Screen1', { stepCount: stepCount + 1 })}
      >
        <Text style={styles.buttonText}>Push Screen 1 Again (Stack Level {stepCount + 1})</Text>
      </TouchableOpacity>

      {/* Navigate moves forward to Screen2 */}
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('Screen2', { message: `From Screen 1 Level ${stepCount}` })}
      >
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>

      {/* goBack pops the current screen off the stack */}
      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonOutlineText}>Go Back (pop)</Text>
      </TouchableOpacity>

      {/* popToTop resets the stack back to the root (Home) screen */}
      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonOutlineText}>Pop to Top (Home)</Text>
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
