import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileSaved({navigation}: {navigation : any}): JSX.Element {
  return <SafeAreaView>
  <Button title="These are my saved posts" onPress={() => navigation.navigate("post")} />
  </SafeAreaView>;
}

export default ProfileSaved;