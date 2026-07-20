import { NavigatorScreenParams } from '@react-navigation/native';
import Screen3 from '../screens/Screen3';

export type HomeStackParamList = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Search: undefined;
  Profile: undefined;
};
