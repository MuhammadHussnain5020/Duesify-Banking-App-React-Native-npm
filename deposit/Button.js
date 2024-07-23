import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Btn({ backgroundColor, title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '35%',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    bottom: 2,
  },
});
