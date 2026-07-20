import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../navigation/types';

type Props = BottomTabScreenProps<BottomTabParamList, 'Profile'>;

export default function Profile({ navigation, route }: Props) {
  const userId = route.params?.userId || 'guest';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Profile Screen</Text>

      <View style={styles.box}>
        <Text style={styles.label}>User ID:</Text>
        <Text style={styles.value}>{userId}</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() =>
          navigation.navigate('HomeStack', {
            screen: 'Home',
          })
        }
      >
        <Text style={styles.buttonText}>Go to Home Stack</Text>
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
  label: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
