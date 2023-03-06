import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from '../Styles/styles';
import Section from '../Components/Section';
import { posts } from '../data';

type HomeScreenProps = {
  navigation: any
}

function HomeScreen({ navigation } : HomeScreenProps): JSX.Element {

  const sections : React.ReactNode[] = [];
  posts.forEach((post) => {
    sections.push(<Section {...post} navigation={navigation}/>)
  })

  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={{flex:1}}>
          {sections}
          {/* <Section title="Repeal Section 230 of CDA" description='Qualified Immunity makes it difficult for victims of police misconduct to hold officers accountable for their actions, which can lead to a lack of trust in law enforcement and a breakdown in the relationship between police and the communities they serve.' step={2} navigation={navigation}/>
          <Section title="End Qualified Immunity" description='Online platforms have abused their immunity under Section 230 to allow harmful content to spread on their platforms, including hate speech, disinformation, and extremist content. Platforms like Facebook, Twitter, and YouTube have become too powerful and have failed to adequately moderate harmful content, leading to real-world harm.' step={1} navigation={navigation}/>
          <Section title="Increase funding for public schools" description='Increasing school funding is essential to ensure that all students have access to high-quality education and the resources they need to succeed. Here are some reasons why:' step={0} navigation={navigation}/>
          <Section title="Limit construction in national park" description='National parks are often home to unique and fragile ecosystems that are vulnerable to damage from construction activities. Limiting construction can help preserve these ecosystems and protect wildlife habitats from disturbance.' step={3} navigation={navigation}/> */}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
