import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import ApiDataComponent from './components/ApiDataComponent';

function App() {
  return (
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <ApiDataComponent />
    </ScrollView>
  );
}

export default App;
