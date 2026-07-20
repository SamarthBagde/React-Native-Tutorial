import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Screen1'>;

export default function Screen1({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>

      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <Button
        title="Push Screen 1 Again"
        onPress={() => navigation.push('Screen1')}
      />

      <Button
        title="Push Screen 1 Again"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
});
