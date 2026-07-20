import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../navigation/types';

type Props = BottomTabScreenProps<BottomTabParamList, 'Profile'>;

export default function Profile({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
  },
});
