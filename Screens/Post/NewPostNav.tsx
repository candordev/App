import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BackButton from '../../Components/BackButton';
import NextButton from '../../Components/Button';
import {posts} from '../../data';
import PostScreenContent from './PostScreenContent';
import PostScreenPoll from './PostScreenPoll';
import PostScreenSolution from './PostScreenSolution';
import PostScreenTitle from './PostScreenTitle';

const PostStack = createNativeStackNavigator();

function NewPostNav({navigation}: {navigation: any}): JSX.Element {
  return (
    <PostStack.Navigator
      screenOptions={{
        headerTitle: 'Candor',
        headerTitleAlign: 'left',
        headerTitleStyle: {color: 'mediumslateblue', fontSize: 25},
      }}>
      <PostStack.Screen
        name="new post"
        component={PostScreenTitle}
        // options = {{
        //   headerRight: () => (
        //     <NextButton name= "Next" onPress = {() => navigation.navigate('content post')}/>
        //   )
        // }}
      />
      <PostStack.Screen
        name="content post"
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('new post')} />
          ),
          headerTitle: 'Candor',
          headerRight: () => (
            <NextButton
              name="Submit"
              onPress={() => {
                console.log("IN HERE")
                posts.unshift({
                  title: 'Example proposal',
                  description:
                    'Example description',
                  step: 0,
                  posterUID: 1,
                  raised: 0,
                  numComments: 0,
                  likes: '0',
                  dislikes: '0',
                  date: 'March 7',
                  group: '4th District',
                  uid: 4,
                });
                console.log(posts.length)
                navigation.navigate('Home');
              }}
            />
          ),
        }}
        component={PostScreenContent}
      />
      <PostStack.Screen
        name="poll post"
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('new post')} />
          ),
          headerTitle: 'Candor',
          headerRight: () => (
            <NextButton
              name="Submit"
              onPress={() => {
                posts.unshift({
                  title: 'Some Law idk',
                  description:
                    'Qualified Immunity makes it difficult for victims of police misconduct to hold officers accountable for their actions, which can lead to a lack of trust in law enforcement and a breakdown in the relationship between police and the communities they serve.',
                  step: 0,
                  posterUID: 1,
                  raised: 400.66,
                  numComments: 4,
                  likes: '45',
                  dislikes: '3',
                  date: 'March 1',
                  group: 'Kansas',
                  uid: 4,
                });
                navigation.navigate('Home');
              }}
            />
          ),
        }}
        component={PostScreenPoll}
      />
      <PostStack.Screen
        name="solution post"
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('new post')} />
          ),
          headerTitle: 'Candor',
          headerRight: () => (
            <NextButton
              name="Submit"
              onPress={() => navigation.navigate('Home')}
            />
          ),
        }}
        component={PostScreenSolution}
      />
    </PostStack.Navigator>
  );
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
