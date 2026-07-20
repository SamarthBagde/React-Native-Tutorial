import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

const BgChangerScreen = () => {
  const [color, setColor] = useState('#4F46E5');

  const generateColor = () => {
    const hex = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += hex[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  // Determine if background is light or dark for text contrast
  const isLight = () => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 155;
  };

  const light = isLight();
  const textColor = light ? '#111827' : '#FFFFFF';

  return (
    <>
      <StatusBar
        barStyle={light ? 'dark-content' : 'light-content'}
        backgroundColor={color}
      />
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={[styles.hexCode, { color: textColor }]}>
          {color}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={generateColor}
          style={[
            styles.button,
            { backgroundColor: light ? '#111827' : '#FFFFFF' },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: light ? '#FFFFFF' : '#111827' },
            ]}
          >
            Change Color
          </Text>
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
    padding: 24,
  },
  hexCode: {
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 40,
    fontVariant: ['tabular-nums'],
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BgChangerScreen;
