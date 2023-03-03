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
  
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={{flex:1}}>
          <Section title="Black Lives Matter" description='Join the Movement to fight for Freedom, Liberation and Justice by signing up for updates, supporting our work, checking out our resources, following us on social media, or wearing our dope, official gear.'>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your editssss.
          </Section>
          <Section title="Black Lives Matter" description='Join the Movement to fight for Freedom, Liberation and Justice by signing up for updates, supporting our work, checking out our resources, following us on social media, or wearing our dope, official gear.'>
          </Section>
          <Section title="Black Lives Matter" description='Join the Movement to fight for Freedom, Liberation and Justice by signing up for updates, supporting our work, checking out our resources, following us on social media, or wearing our dope, official gear.'>
          </Section>
          <Section title="Black Lives Matter" description='Join the Movement to fight for Freedom, Liberation and Justice by signing up for updates, supporting our work, checking out our resources, following us on social media, or wearing our dope, official gear.'>
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
