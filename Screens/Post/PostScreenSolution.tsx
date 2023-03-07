import React from "react";
import { TextInput, View } from "react-native";


function PostScreenSolution(props:any): JSX.Element {
    return ( 
        <View style  = {{flexDirection:'row', flex: 1, 
        flexWrap: 'wrap'}}>
           <TextInput style = {{
              fontSize : 20,
              fontWeight: '600',
              color: 'gray',
              marginTop: 30,
              marginHorizontal:20}} 
              placeholder = "Solution Description" 
              multiline = {true}
              autoCapitalize={'sentences'}
              />
              
         </View>
        )}


export default PostScreenSolution;