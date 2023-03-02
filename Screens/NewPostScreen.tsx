import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function NewPostScreen(): JSX.Element {
  return <SafeAreaView>
    <Text>New Post Screen - this won't be a screen - will be a modal popup</Text>
  </SafeAreaView>;
}

export default NewPostScreen;