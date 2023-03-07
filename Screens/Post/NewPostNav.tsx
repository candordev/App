import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import BackButton from "../../Components/BackButton";
import NextButton from "../../Components/NextButton";
import PostScreenContent from "./PostScreenContent";
import PostScreenPoll from "./PostScreenPoll";
import PostScreenSolution from "./PostScreenSolution";
import PostScreenTitle from "./PostScreenTitle";

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