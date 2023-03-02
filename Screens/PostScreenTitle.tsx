import React from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../Styles/styles";
import Icon from 'react-native-vector-icons/Feather';

function PostScreenTitle(): JSX.Element
 { return (
  <View style={[{flexDirection: 'column', flex: 1, backgroundColor: 'white'}]}>
    <View style={{flex: 3, backgroundColor: 'white', justifyContent: "space-between"}}>
    <TextInput style = {{
      fontSize: 24,
      width: 200,
      fontWeight: '600',
      color: 'gray',
      alignItems: 'flex-start',
      marginTop: 30,
      marginLeft:0,}} 
      placeholder = "Title" 
      textAlign=  "left"/>
      </View>
   
    <View style= {{
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
        backgroundColor: 'white', justifyContent: "space-between", padding: 5, margin: 20}}>
      
      <Text style = {{ 
        fontSize: 24,
        fontWeight: '600',
        color: 'gray',
        textAlign: 'center',}}
        >Select a Post</Text>
      
      
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:50}}>
        <View style={{alignItems:'center'}}>
        <Icon name="alert-triangle" size={30} color="mediumslateblue"/>
        <Text style = {{color: 'gray', fontSize: 10, textAlign: 'center', fontWeight: "bold"}}>Problem</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Icon name="check" size={30} color="mediumslateblue"/>
        <Text style = {{color: 'gray', fontSize: 10, textAlign: 'center', fontWeight: "bold"}}>Solution</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Icon name="message-square" size={30} color="mediumslateblue"/>
        <Text style = {{color: 'gray', fontSize: 10, textAlign: 'center', fontWeight: "bold"}}>Comment</Text>
        </View>
      </View>
  </View>
  </View>
);
  }

export default PostScreenTitle;