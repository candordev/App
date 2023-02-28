import React from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ChatScreen({navigation} : {navigation : any}): JSX.Element {
  return <SafeAreaView>
      {/* <Text>Chat Screen</Text> */}
      <Button title="Open a post" onPress={() => navigation.navigate("post")} />
      </SafeAreaView>;
}

export default ChatScreen;