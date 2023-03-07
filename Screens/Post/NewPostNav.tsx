import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreenTitle from "./PostScreenTitle";
import PostScreenContent from "./PostScreenContent";
import NextButton from "../../Components/NextButton";
import HeaderRight from "../../Components/HeaderRight";
import { Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import BackButton from "../../Components/BackButton";
import HeaderLeft from "../../Components/HeaderLeft";
import PostScreen from "../PostScreen";
import PostScreenPoll from "./PostScreenPoll";
import PostScreenSolution from "./PostScreenSolution";
const screens = {
  PostScreenTitle: {
    screen: PostScreenTitle
  }, 
  PostScreenContent: { 
    screen: PostScreenContent
  }
}  

const PostStack = createNativeStackNavigator();

function NewPostNav({navigation} : {navigation : any}): JSX.Element {
  return (
    <PostStack.Navigator
      screenOptions={{
        headerTitle: "Candor",
        headerTitleAlign: "left",
        headerTitleStyle: {color: "mediumslateblue", fontSize: 25}
      }}>

      <PostStack.Screen name="new post" component={PostScreenTitle}
      // options = {{
      //   headerRight: () => (
      //     <NextButton name= "Next" onPress = {() => navigation.navigate('content post')}/>
      //   )
      // }}
      />
      <PostStack.Screen name="content post"
      options={{
        headerBackVisible: false,
        headerLeft: () => (
          <BackButton onPress={() => navigation.navigate('new post')}/>
        ),
        headerTitle: "Candor",
        headerRight: () => (
          <NextButton name= "Submit" onPress = {() => navigation.navigate('Home')}/>
        )
        
        }} component = {PostScreenContent}/>
        <PostStack.Screen name="poll post"
      options={{
        headerBackVisible: false,
        headerLeft: () => (
          <BackButton onPress={() => navigation.navigate('new post')}/>
        ),
        headerTitle: "Candor",
        headerRight: () => (
          <NextButton name= "Submit" onPress = {() => navigation.navigate('Home')}/>
        )
        
        }} component = {PostScreenPoll}/>
        <PostStack.Screen name="solution post"
      options={{
        headerBackVisible: false,
        headerLeft: () => (
          <BackButton onPress={() => navigation.navigate('new post')}/>
        ),
        headerTitle: "Candor",
        headerRight: () => (
          <NextButton name= "Submit" onPress = {() => navigation.navigate('Home')}/>
        )
        
        }} component = {PostScreenSolution}/>
      </PostStack.Navigator>
  )
}
export default NewPostNav;

/**
 * Flow of Screen Navigation.
 * 
 * 
 * 
 * 
 * 
 *  */ 