import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Text>Home Screen</Text>
  );
};

const WorkScreen = () => {
  return (
    <Text>Work Screen</Text>
  );
};

const StatisticsScreen = () => {
  return (
    <Text>Statistics Screen</Text>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide the top navigation bar
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainStack} />
        <Tab.Screen name="Work" component={WorkScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
