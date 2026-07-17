import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

function App() {
  return (
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
    </ScrollView>
  );
}

export default App;
