import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileComment from './ProfileComment';

function ProfileComments({navigation}: {navigation: any}): JSX.Element {
  return (
    <View style={{flex: 1, margin: 5}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <ProfileComment description="I posted something very similar about qualified immunity and how it shields police officers from accountability. This needs to change."/>
          <ProfileComment description="Rishi I love your posts! I think you should run."></ProfileComment>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileComments;
