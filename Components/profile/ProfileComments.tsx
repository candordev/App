import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileComment from './ProfileComment';

function ProfileComments({navigation}: {navigation: any}): JSX.Element {
  return (
    <View style={{flex: 1, margin: 5}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <ProfileComment description="Just read an article about qualified immunity and how it shields police officers from accountability. This needs to change."/>
          <ProfileComment description="Tanuj I love your posts! I think you should run."></ProfileComment>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileComments;
