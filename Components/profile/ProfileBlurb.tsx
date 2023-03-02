import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfilePicture from '../ProfilePicture';
import styles from '../../Styles/styles';

const displayName = 'Tanuj D';
const handle = '@tjblack';
const imageUrl =
  'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/244305674_1199851353874099_7498215930166384149_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=hB9YE6db7AIAX_HgwSF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCpwZNohvZhEMUcJuq0ytfmPCui_c-jViJc7cmjZ8AYew&oe=64058AA8&_nc_sid=8fd12b';
let followers = 10;
let flames = 436;
let bio =
  'Hi! My name is Tanuj Dunthuluri. Currently, a second year Computer Science student at Georgia Tech, I am passionate about local politics and I want to get involved!';

function ProfileBlurb(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <Button title="Tanuj Dunthuluri" /> */}
      <View style={styles.sectionContainer}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <ProfilePicture imageUrl={imageUrl} big={true} />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 24, marginLeft: 10}}>{displayName}</Text>
              <Text style={{fontSize: 24, marginLeft: 5, color: 'slategray'}}>
                {handle}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15, marginLeft: 10, marginTop: 3}}>
                {followers + ' followers'}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  marginTop: 3,
                  color: 'slategray',
                }}>
                {flames + ' flames'}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 17, marginLeft: 10, marginTop: 3, flex: 1, flexWrap:'wrap'}}>
                {bio}
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <Text style={styles.sectionTitle}></Text>
        <Text style={styles.sectionDescription}></Text>
      </View>
    </SafeAreaView>
  );
}

export default ProfileBlurb;
