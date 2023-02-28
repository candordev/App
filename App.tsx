import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import HeaderRight from './Components/HeaderRight';
import Root from './Root';
import PostScreen from './Screens/PostScreen';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import HeaderLeft from './Components/HeaderLeft';
import Header from './Components/Header';
import BackButton from './Components/BackButton';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  const backgroundStyle = {
    backgroundColor: "white",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="root" 
          component={Root}
          options = {({ navigation }) => ({
            headerShown: false
          })} 
        />
        <Stack.Screen 
          name ="post" 
          component={PostScreen}
          options = {({ navigation }) => ({
            title: 'State',
            headerTitleStyle: {color: "gray", fontSize: 25},
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={30} color="gray" />
              </TouchableOpacity>
            ),
            headerBackVisible: false,
            headerShadowVisible: false,
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
