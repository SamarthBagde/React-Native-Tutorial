import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStackNavigator';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

import { BottomTabParamList } from './types';

// Create bottom tab navigator instance
const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* HomeStack tab screen: headerShown set to false to prevent duplicate top header */}
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          headerShown: false, // Prevents duplicate header bar (Stack Navigator handles its own header)
        }}
      />

      {/* Search tab screen */}
      <Tab.Screen name="Search" component={Search} />

      {/* Profile tab screen */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
