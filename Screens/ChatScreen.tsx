import React from "react";
import { Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ChatScreen({navigation} : {navigation : any}): JSX.Element {
  return <SafeAreaView>
      <Button title="Open a post" onPress={() => navigation.navigate("post")} />
      </SafeAreaView>;
}

export default ChatScreen;