import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './StatisticsScreenStyleSheet'

const StatisticsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.test}>Statistics Screen</Text>
    </View>
  );
};

export default StatisticsScreen;
