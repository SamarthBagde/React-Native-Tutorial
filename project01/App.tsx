import React from 'react';
import BgChangerScreen from './src/screens/bgChangerScreen';
import ApiDataComponent from './src/components/ApiDataComponent';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';

function App() {
  return (
    <>
      <BgChangerScreen />
      <FlatCards />
      <ElevatedCards />
      <ApiDataComponent />
    </>
  );
}

export default App;
