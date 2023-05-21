import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './HomeScreenStyleSheet'

const HomeScreen = () => {

   

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.test}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
