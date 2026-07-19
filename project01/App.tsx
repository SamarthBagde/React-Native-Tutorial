import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import ApiDataComponent from './src/components/ApiDataComponent';
import BgChangerScreen from './src/screens/bgChangerScreen';

function App() {
  return <BgChangerScreen />;
}

export default App;
