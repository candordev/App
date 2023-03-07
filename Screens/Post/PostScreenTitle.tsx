import React, {useEffect, useState} from "react";
import { Pressable, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useFocusEffect } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import Text from "../../Components/Native/Text";

function PostScreenTitle({navigation} : {navigation : any}): 
JSX.Element
 
{ 
  const [highlight, setHighlight] = useState([false, false, false]);
  
  useEffect(() => {
    updateNextButton(navigation); 
  }, [highlight]);
  
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setHighlight([false, false, false]);
      };
    }, [])
  );

  function updateNextButton(navigation: any) {
    console.log(highlight);
    if (highlight[0]) {
      navigation.setOptions({
        headerRight: () => (
          <NextButton name="Next" onPress={() => navigation.navigate('content post')} />
        )
      });
    }
    else if (highlight[1]) {
      navigation.setOptions({
        headerRight: () => (
          <NextButton name="Next" onPress={() => { { navigation.navigate('poll post'); } } } />
        )
      });
    }
    else if (highlight[2]) {
      navigation.setOptions({
        headerRight: () => (
          <NextButton name="Next" onPress={() => navigation.navigate('solution post')} />
        )
      });
    }
    else if (highlight[0] === false && highlight[1] === false && highlight[2] === false) {
      navigation.setOptions({
        headerRight: () => (
         null
        )
        
      });
    }
  }
   
  return ( 
  <View style={[{flexDirection: 'column', flex: 1, backgroundColor: 'white'}]}>
    <View style={{flex: 3, backgroundColor: 'white'}}>
      <TextInput style = {{
        fontSize: 24,
        fontWeight: '600',
        color: 'gray',
        marginTop: 30,
        marginHorizontal:20,}} 
        placeholder = "Title" 
        multiline = {true}
        />
    </View>
    <View style= {{
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
        backgroundColor: 'white', padding: 5, margin: 20}}>

      <Text style = {{ 
        fontSize: 24,
        fontWeight: '600',
        color: 'gray',
        textAlign: 'center',}}
        >Select a Post</Text>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:50}}>
        <Pressable onPress={() => {setHighlight([true, false, false])}} style={{alignItems:'center'}}>
          <Icon name="alert-triangle" size={30} color={highlight[0] ? "mediumslateblue" : "gray"}/>
          <Text style = {{color: 'gray', fontSize: 10, textAlign: 'center', fontWeight: "bold", marginTop:5}}>Problem</Text>
        </Pressable>
        <Pressable onPress={() => {setHighlight([false, true, false])}} style={{alignItems:'center'}}>
          <Icon name="archive" size={30} color={highlight[1] ? "mediumslateblue" : "gray"}/>
          <Text style = {{color: 'gray', fontSize: 10, textAlign: 'center', fontWeight: "bold", marginTop:5}}>Poll</Text>
        </Pressable>
        <Pressable onPress={() => {setHighlight([false, false, true])}} style={{alignItems:'center'}}>
          <Icon name="award" size={30} color={highlight[2] ? "mediumslateblue" : "gray"}/>
          <Text style = {{color: 'gray', fontSize: 10, fontWeight: "bold", marginTop:5}}>Solution</Text>
        </Pressable>
      </View>
  </View>
  </View>
);}

export default PostScreenTitle;