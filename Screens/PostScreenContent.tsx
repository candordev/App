import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewPostNav from "./NewPostNav";

function PostScreenContent(): JSX.Element {
  return <SafeAreaView>
    <Text>New Post Screen - this won't be a screen - will be a modal popup</Text>
  </SafeAreaView>;
}

export default PostScreenContent;