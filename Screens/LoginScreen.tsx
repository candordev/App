import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Feather';
import IconText from "../Components/IconText";
import IconTextButton from "../Components/IconTextButton";
import ProfilePicture from "../Components/ProfilePicture";
import ProgressBar from "../Components/ProgressBar";
import styles from "../Styles/styles";

type LoginScreenProps = {
  route: any;
  navigation: any;
};

function LoginScreen({ route, navigation } : LoginScreenProps): JSX.Element {
  return <SafeAreaView>
    <Text>Login Screen</Text>
  </SafeAreaView>
}

export default LoginScreen;