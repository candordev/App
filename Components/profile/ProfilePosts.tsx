import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfilePosts({navigation}: {navigation : any}): JSX.Element {
  return <SafeAreaView>
  <Button title="These are my posts" onPress={() => navigation.navigate("post")} />
  </SafeAreaView>;
}

export default ProfilePosts;