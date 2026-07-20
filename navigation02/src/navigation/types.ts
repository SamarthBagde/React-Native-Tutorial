import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
  Screen1: { stepCount?: number; source?: string } | undefined;
  Screen2: { message?: string } | undefined;
  Screen3: undefined;
  Details: { itemId: number; title: string; category: string; color: string; description: string };
};

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Search: { query?: string } | undefined;
  Profile: { userId?: string } | undefined;
};
