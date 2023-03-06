import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { ProfileComments, ProfilePosts, ProfileSaved, ProfileBlurb } from '../Components/profile';

const Tab = createMaterialTopTabNavigator();

function Nav() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'mediumslateblue',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Posts" component={ProfilePosts} />
      <Tab.Screen name="Comments" component={ProfileComments} />
      <Tab.Screen name="Saved" component={ProfileSaved} />
    </Tab.Navigator>
  );
}

function ProfileScreen({navigation}: {navigation: any}): JSX.Element {
  return (
      <>
        <ProfileBlurb/>
        <Nav/>
      </>
  );
}

export default ProfileScreen;
