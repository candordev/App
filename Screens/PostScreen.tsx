import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PostScreenProps = {
  route: any;
  navigation: any;
};

function PostScreen({ route, navigation } : PostScreenProps): JSX.Element {
  const props = route.params;
  return <View>
    <Text>{props.title}</Text>
  </View>;
}

export default PostScreen;