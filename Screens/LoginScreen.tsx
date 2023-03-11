import React, { useState } from "react";
import { Button, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "../Components/Native/HeaderText";

import Text from "../Components/Native/Text";
import NextButton from "../Components/NextButton";

type LoginScreenProps = {
  route: any;
  navigation: any;
};

function LoginScreen({ route, navigation } : LoginScreenProps): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('root', { username: username })
  };

  const handleSignup = () => {
    navigation.navigate('signup')
  };

  return (
    <View style={styles.container}>
      <HeaderText style={styles.title}>Candor</HeaderText>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <NextButton title="Login" onPress={handleLogin} style={styles.button} textStyle={styles.buttonText}/>
      <Pressable style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'mediumslateblue',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    borderWidth:1,
    borderColor: 'gray',
    backgroundColor: 'mediumslateblue',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    position: 'absolute',
    bottom: 50,
  },
  signupText: {
    color: 'mediumslateblue',
    fontSize: 16,
  },
});

export default LoginScreen;