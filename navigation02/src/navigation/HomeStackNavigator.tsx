import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Details from '../screens/Details';

import { HomeStackParamList } from './types';

// Create native stack navigator instance
const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      {/* Home screen screen definition */}
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />

      {/* Screen1 screen definition */}
      <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Screen 1' }} />

      {/* Screen2 screen definition */}
      <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Screen 2' }} />

      {/* Screen3 screen definition */}
      <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Screen 3' }} />

      {/* Details screen with dynamic title set from route.params */}
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params?.title || 'Details', // Dynamic header title from passed parameters
        })}
      />
    </Stack.Navigator>
  );
}
