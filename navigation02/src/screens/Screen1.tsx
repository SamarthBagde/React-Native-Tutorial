import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;

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
