import React from 'react';
import {View} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import Text from '../Native/Text';

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
      /* <Button title="Tanuj Dunthuluri" /> */
      <View style={{
        marginVertical: 10,
        padding: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
          }}
        >
          <ProfilePicture imageUrl={imageUrl} big={true} />
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 3
          }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 24, marginLeft: 10}}>{displayName}</Text>
              <Text style={{fontSize: 24, marginLeft: 10, color: 'gray'}}>
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
                  marginLeft: 10,
                  marginTop: 3,
                  color: 'mediumslateblue',
                }}>
                {flames + ' flames'}
              </Text>
            </View>
          </View>
        </View>
        {/* <Text style={styles.sectionTitle}>About Me</Text> */}
        <Text style={{
            fontWeight: '400',
            color:'black',
            padding: 5,
            marginTop: 5,
            fontFamily: 'OpenSans-Regular',
        }}>{bio}</Text>
      </View>
  );
}

export default ProfileBlurb;
