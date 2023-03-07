import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../Components/Native/Text";

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