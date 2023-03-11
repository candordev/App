import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import BackButton from "../Components/BackButton";
import HeaderText from "../Components/Native/HeaderText";
import Button from "../Components/Button";

type SignupScreenProps = {
  route: any;
  navigation: any;
};

function SignupScreen({ route, navigation } : SignupScreenProps): JSX.Element {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    navigation.navigate('root', { username: username })
  };

  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} onPress={navigation.goBack}/>
      <HeaderText style={styles.title}>Candor</HeaderText>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button text="Signup" onPress={handleSignup} style={styles.button} textStyle={styles.buttonText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 15,
    top: 50,
    zIndex: 1,
  },
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

export default SignupScreen;