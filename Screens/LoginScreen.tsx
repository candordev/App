import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "../Components/Native/Text";

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