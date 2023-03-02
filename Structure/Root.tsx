import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import NewPostScreen from '../Screens/NewPostScreen';
import InboxScreen from '../Screens/InboxScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Feather';
import HeaderRight from '../Components/HeaderRight';

const Tab = createBottomTabNavigator();

function Root(): JSX.Element {

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName : string = "user";

            if (route.name === 'Home') {
                iconName = "home"
            } else if (route.name === 'Chat') {
                iconName = "message-circle"
            } else if (route.name === 'NewPost') {
                iconName = "plus-circle"
            } else if (route.name === 'Inbox') {
                iconName = "inbox"
            } else if (route.name === 'Profile') {
                iconName = "user"
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: 'mediumslateblue',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            headerRight: HeaderRight,
            headerTitle: "Candor",
            headerTitleAlign: "left",
            headerTitleStyle: {color: "gray", fontSize: 25},
        })}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="NewPost" component={NewPostScreen} />
    <Tab.Screen name="Inbox" component={InboxScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Root;
