import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/StackNavigator';
import { LoginModal } from './src/modals/LoginModal/LoginModal';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {!loggedIn && <LoginModal modalVisible={!loggedIn} handleLogin={handleLogin} />}
      <StatusBar />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
