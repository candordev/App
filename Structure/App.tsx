import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LoginScreen from '../Screens/LoginScreen';
import PostScreen from '../Screens/PostScreen';
import SignupScreen from '../Screens/SignupScreen';
import Root from './Root';

const Stack = createNativeStackNavigator<AppStackParamList>();

type AppStackParamList = {
  login: undefined;
  signup: undefined;
  root: undefined;
  post: {group: string};
};

function App(): JSX.Element {

  // const customTextProps = {
  //   style: {
  //     fontSize: 16,
  //     fontFamily: 'OpenSans-Regular',
  //     color: 'black'
  //   }
  // };

  // setCustomText(customTextProps);

  return (
     <NavigationContainer>
      <Stack.Navigator
        initialRouteName='root'
      >
        <Stack.Screen 
          name="login" 
          component={LoginScreen}
          options = {({ navigation }) => ({
            headerShown: false
          })} 
        />
        <Stack.Screen 
          name="signup" 
          component={SignupScreen}
          options = {({ navigation }) => ({
            headerShown: false
          })} 
        />
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
          options = {({ navigation, route }) => ({
            title: route.params?.group,
            headerTitleStyle: {color: "mediumslateblue", fontSize: 25},
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
