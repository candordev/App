import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../Styles/styles";

type SignupScreenProps = {
  route: any;
  navigation: any;
};

function SignupScreen({ route, navigation } : SignupScreenProps): JSX.Element {
    return <SafeAreaView>
    <Text>Signup Screen</Text>
  </SafeAreaView>
}

export default SignupScreen;