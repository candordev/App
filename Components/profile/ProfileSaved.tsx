import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileSection from './ProfileSection';

function ProfileSaved({navigation}: {navigation: any}): JSX.Element {
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <ProfileSection
            title="Repeal Section 230 of CDA"
            description="Online platforms have abused their immunity under ProfileSection 230 to allow harmful content to spread on their platforms, including hate speech, disinformation, and extremist content. Platforms like Facebook, Twitter, and YouTube have become too powerful and have failed to adequately moderate harmful content, leading to real-world harm."
            step={1}></ProfileSection>
          {/* <ProfileSection
            title="Increase funding for public schools"
            description="Increasing school funding is essential to ensure that all students have access to high-quality education and the resources they need to succeed. Here are some reasons why:"
            step={0}></ProfileSection> */}
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileSaved;
