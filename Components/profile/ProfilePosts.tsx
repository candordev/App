import React from 'react';
import {View} from 'react-native';
import { ScrollView } from 'react-native';
import ProfileSection from './ProfileSection';
import styles from '../../Styles/styles';
import Text from '../Native/Text';

function ProfilePosts({navigation}: {navigation: any}): JSX.Element {
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <ProfileSection
            title="End Qualified Immunity"
            description="Qualified Immunity makes it difficult for victims of police misconduct to hold officers accountable for their actions, which can lead to a lack of trust in law enforcement and a breakdown in the relationship between police and the communities they serve."
            step={2}>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your editssss.
          </ProfileSection>
          <ProfileSection
            title="Repeal Section 230 of CDA"
            description="Online platforms have abused their immunity under ProfileSection 230 to allow harmful content to spread on their platforms, including hate speech, disinformation, and extremist content. Platforms like Facebook, Twitter, and YouTube have become too powerful and have failed to adequately moderate harmful content, leading to real-world harm."
            step={1}></ProfileSection>
          <ProfileSection
            title="Increase funding for public schools"
            description="Increasing school funding is essential to ensure that all students have access to high-quality education and the resources they need to succeed. Here are some reasons why:"
            step={0}></ProfileSection>
          <ProfileSection
            title="Limit construction in national park"
            description="National parks are often home to unique and fragile ecosystems that are vulnerable to damage from construction activities. Limiting construction can help preserve these ecosystems and protect wildlife habitats from disturbance."
            step={3}>
            Read the docs to discover what to do next:
          </ProfileSection>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfilePosts;
