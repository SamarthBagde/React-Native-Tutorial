import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Screen2'>;

export default function Screen2({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>

      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
