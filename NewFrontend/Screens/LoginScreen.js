import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const navigation = useNavigation();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.87:8082/api/v1/user/login', {
        username,
        password,
      });
      
      // Check response status and handle success or failure accordingly
      if (response.status === 200) {
        console.log('Login successful');
        navigation.navigate('Dashboard');
      } else {
        console.log('Login failed');
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error, show error message, etc.
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        secureTextEntry={!showPassword} // Use showPassword state to toggle secureTextEntry
        value={password}
        onChangeText={setPassword}
        right={<TextInput.Icon name={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />} // IconButton for toggling password visibility
      />
      <Button mode="contained" onPress={() => handleLogin()}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default LoginScreen;
