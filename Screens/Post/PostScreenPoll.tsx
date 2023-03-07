import React from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewPostNav from "./NewPostNav";

function PostScreenPoll(props:any): JSX.Element {
    return ( 
        <View style  = {{flexDirection:'row', flex: 1, 
        flexWrap: 'wrap'}}>
           <TextInput style = {{
              fontSize : 15,
              fontWeight: '600',
              color: 'gray',
              marginTop: 30,
              marginLeft:20,
              marginRight:20}} 
              placeholder = "Poll Description" 
              multiline = {true}
              />
              
         </View>
        )}

export default PostScreenPoll;