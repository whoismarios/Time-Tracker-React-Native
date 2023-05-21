import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {styles} from './StatisticsScreenStyleSheet'

const StatisticsScreen = () => {
  return (
    <ImageBackground
            style={styles.backgroundImage}
            source={require('../../../assets/time_without_text_opacity0.1.png')}
            >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.test}>Statistics Screen</Text>
      </View>
    </ImageBackground>
  );
};

export default StatisticsScreen;
