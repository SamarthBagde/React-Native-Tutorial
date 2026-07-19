import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { setUpPlayer, addtrack } from '../../musicPlayerService';

const MusicPlayerScreen = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setUpPlayer();
    if (isSetup) {
      await addtrack();
    }

    setIsPlayerReady(isSetup);
  }
  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <StatusBar />
      <Text>Test</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MusicPlayerScreen;
