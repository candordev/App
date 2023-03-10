import React from "react";
import { TextInput, View } from "react-native";

function PostScreenPoll(props:any): JSX.Element {
    return ( 
        <View style  = {{flexDirection:'row', flex: 1, 
        flexWrap: 'wrap', backgroundColor:'white'}}>
           <TextInput style = {{
              fontSize : 20,
              fontWeight: '600',
              color: 'gray',
              marginTop: 30,
              marginHorizontal:20}} 
              placeholder = "Poll Description" 
              multiline = {true}
              />
              
         </View>
        )}

export default PostScreenPoll;