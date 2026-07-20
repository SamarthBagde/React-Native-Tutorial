import { NavigatorScreenParams } from '@react-navigation/native';

// Type definitions for Home Stack Navigator screens and their accepted route parameters
export type HomeStackParamList = {
  Home: undefined; // No parameters needed
  Screen1: { stepCount?: number; source?: string } | undefined; // Optional stack step counter
  Screen2: { message?: string } | undefined; // Optional message string parameter
  Screen3: undefined; // No parameters needed
  Details: { itemId: number; title: string; category: string; color: string; description: string }; // Required details object
};

// Type definitions for Bottom Tab Navigator screens
export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>; // Nesting HomeStack inside BottomTab
  Search: undefined; // Search tab screen
  Profile: { userId?: string } | undefined; // Profile tab screen with optional userId
};
