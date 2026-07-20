import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Screen2'>;

export default function Screen2({ navigation, route }: Props) {
  // Read route parameter passed from previous screen
  const message = route.params?.message || 'No message received';

  // Function updating route params dynamically on the current screen
  const handleUpdateParams = () => {
    navigation.setParams({
      message: `Updated at ${new Date().toLocaleTimeString()}`,
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Screen 2</Text>
      <Text style={styles.description}>Route parameters passed to this screen:</Text>

      {/* Render the route parameter value */}
      <View style={styles.paramBox}>
        <Text style={styles.paramText}>{message}</Text>
      </View>

      {/* Button calling setParams to update route.params dynamically */}
      <TouchableOpacity style={styles.buttonPrimary} onPress={handleUpdateParams}>
        <Text style={styles.buttonText}>Update Params (setParams)</Text>
      </TouchableOpacity>

      {/* Navigate forward to Screen3 */}
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.buttonText}>Go to Screen 3</Text>
      </TouchableOpacity>

      {/* Pop back to previous screen */}
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
    marginBottom: 12,
  },
  paramBox: {
    backgroundColor: '#f2f2f7',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    marginBottom: 20,
  },
  paramText: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '500',
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
