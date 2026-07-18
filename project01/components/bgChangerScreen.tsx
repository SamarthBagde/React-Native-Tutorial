import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

const BgChangerScreen = () => {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff');

  const changeBackground = () => {
    const hexRange = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBackgroundColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={'#009eec'} />
      <View
        style={[styles.container, { backgroundColor: randomBackgroundColor }]}
      >
        <TouchableOpacity onPress={changeBackground}>
          <View style={[styles.actionBtn]}>
            <Text style={[styles.actionBtnTxt]}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#009eec',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default BgChangerScreen;
