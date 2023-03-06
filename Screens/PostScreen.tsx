import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import IconText from "../Components/IconText";
import IconTextButton from "../Components/IconTextButton";
import ProfilePicture from "../Components/ProfilePicture";
import ProgressBar from "../Components/ProgressBar";
import styles from "../Styles/styles";

type PostScreenProps = {
  route: any;
  navigation: any;
};

function PostScreen({ route, navigation } : PostScreenProps): JSX.Element {
  const props = route.params;
  //navigation.setOptions({ title: props.group })
  console.log(props)
  return <View style={styles.sectionContainer}>
  <View style={{flexDirection: 'row', alignItems:'center'}}>
      <ProfilePicture imageUrl='https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/244305674_1199851353874099_7498215930166384149_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=hB9YE6db7AIAX_HgwSF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCpwZNohvZhEMUcJuq0ytfmPCui_c-jViJc7cmjZ8AYew&oe=64058AA8&_nc_sid=8fd12b' big={false}/>
      <View>
          <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15, marginLeft: 10, color: 'black'}}>{props.displayName}</Text>
              <Text style={{fontSize: 15, marginLeft: 5, color:'gray'}}>{props.handle}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15, marginLeft: 10, marginTop: 3, color:'gray'}}>{props.date + ' ·'}</Text>
              <Text style={{fontSize: 15, marginLeft: 5, marginTop: 3, color: 'mediumslateblue'}}>{props.group}</Text>
          </View>
      </View>
      <View style={{flex: 1}}></View>
      <ProgressBar step={props.step}/>
      <Icon name="more-vertical" size={20} color="gray" />
  </View>
  <Text
      style={styles.sectionTitle}>
      {props.title}
  </Text>
  <Text
      style={styles.sectionDescription}>
      {props.description}
  </Text>
  <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:15}}>
      <IconText icon='dollar-sign' text='400.66' color='seagreen' size={20}></IconText>
      <IconText icon='share' text='200' color='gray' size={20}></IconText>
      <IconTextButton icon='thumbs-up' text='1.2k' color='gray' size={20} changedColor='mediumslateblue'></IconTextButton>
      <IconTextButton icon='thumbs-down' text='200' color='gray' size={20} changedColor='mediumslateblue'></IconTextButton>
  </View>
</View>
}

export default PostScreen;