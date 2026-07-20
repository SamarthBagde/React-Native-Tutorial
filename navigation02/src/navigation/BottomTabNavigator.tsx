import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStackNavigator';

import Search from '../screens/Search';
import Profile from '../screens/Profile';

import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />

      <Tab.Screen name="Search" component={Search} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
