import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from '../Styles/styles';
import Section from '../Components/Section';

function HomeScreen(): JSX.Element {

  const backgroundStyle = {
    backgroundColor: "lightgray",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        >
        <View style={{flex:1}}>
          <Section title="Black Lives Matter" description='Join the Movement to fight for Freedom, Liberation and Justice by signing up for updates, supporting our work, checking out our resources, following us on social media, or wearing our dope, official gear.'>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your editssss.
          </Section>
          <Section title="See Your Changes more text added" description='something'>
          </Section>
          <Section title="Debug" description='something'>
          </Section>
          <Section title="Learn More" description='something'>
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
