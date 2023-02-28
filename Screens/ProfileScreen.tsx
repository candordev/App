import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen({navigation}: {navigation : any}): JSX.Element {
  return <SafeAreaView>
  <Button title="Open a post" onPress={() => navigation.navigate("post")} />
  </SafeAreaView>;
}

export default ProfileScreen;