import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Perform login logic
    navigation.replace('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
