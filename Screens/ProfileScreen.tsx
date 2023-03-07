import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { ProfileComments, ProfilePosts, ProfileSaved, ProfileBlurb } from '../Components/Profile';
import colors from '../Styles/colors';

const Tab = createMaterialTopTabNavigator();

function Nav() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'mediumslateblue',
      tabBarInactiveTintColor: 'gray',
      tabBarIndicatorStyle: {backgroundColor: colors.purple },
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
