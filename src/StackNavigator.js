import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import WorkScreen from './screens/WorkScreen/WorkScreen';
import StatisticsScreen from './screens/StatisticsScreen/StatisticsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = 'home';
            } else if (route.name === 'Work') {
              iconName = 'briefcase';
            } else if (route.name === 'Statistics') {
              iconName = 'pie-chart';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orangered',
          tabBarInactiveTintColor: 'rgb(0, 143, 209)',
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Main" component={MainStack} />
        <Tab.Screen name="Work" component={WorkScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
