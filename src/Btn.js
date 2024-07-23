import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Btn({ bgcolor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[styles.button, { backgroundColor: bgcolor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    alignItems: 'center',
    textAlign:'center',
    width: 300,
    paddingVertical: 5,
    marginVertical: 10,
    marginLeft: -10,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    bottom:5,
  },
});
