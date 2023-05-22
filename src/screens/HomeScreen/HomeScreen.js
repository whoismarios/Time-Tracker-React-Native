import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from './HomeScreenStyleSheet';

const HomeScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../../assets/time_without_text_opacity0.1.png')}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={styles.test}>Home Screen</Text>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
