import React from 'react';
import { View, Text, Button } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go To Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
}
