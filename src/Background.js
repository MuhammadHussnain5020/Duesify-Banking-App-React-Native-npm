import React from 'react';
import { View, ImageBackground, StyleSheet, StatusBar } from 'react-native';

const Background = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images.png')} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <StatusBar backgroundColor="#FF7F27" barStyle="default" />
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Background;
