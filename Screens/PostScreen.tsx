import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconText from '../Components/IconText';
import IconTextButton from '../Components/IconTextButton';
import ProfilePicture from '../Components/ProfilePicture';
import ProgressBar from '../Components/ProgressBar';
import styles from '../Styles/styles';
import Comment from '../Components/Comment';
import CommentReply from '../Components/CommentReply';
import {ScrollView} from 'react-native';
import { comments, posts, users, groups } from '../data';

import Text from '../Components/Native/Text';

type PostScreenProps = {
  route: any;
  navigation: any;
};

let rishiImage = "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/298388217_1612025222546051_3060701400581511852_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=DONJORG7e_sAX-K7r9B&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDUgonTcXUbd8NpRJF_nOZl6Nz7BusvA8lneEaTfS8q6w&oe=640D151F&_nc_sid=8fd12b";
let tanujImage = "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/244305674_1199851353874099_7498215930166384149_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=hB9YE6db7AIAX_HgwSF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCpwZNohvZhEMUcJuq0ytfmPCui_c-jViJc7cmjZ8AYew&oe=64058AA8&_nc_sid=8fd12b";
let srikarImage = "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/332223437_711814963909650_2670603941380621792_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=ZKhpgWK2qqQAX-fZ5Gg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDtV9fG1_hv6tOfkftMW69SrYCXNRM0yISj15gonPW_Cg&oe=640CBD8F&_nc_sid=8fd12b";

function PostScreen({route, navigation}: PostScreenProps): JSX.Element {
  const props = route.params;
  return (
    <View style={{flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ProfilePicture
              imageUrl={tanujImage}
              big={false}
            />
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 15, marginLeft: 10, color: 'black'}}>
                  {props.displayName}
                </Text>
                <Text style={{fontSize: 15, marginLeft: 5, color: 'gray'}}>
                  {props.handle}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    marginTop: 3,
                    color: 'gray',
                  }}>
                  {props.date + ' ·'}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    marginTop: 3,
                    color: 'mediumslateblue',
                  }}>
                  {props.group}
                </Text>
              </View>
            </View>
            <View style={{flex: 1}}></View>
            <ProgressBar step={props.step} />
            <Icon name="more-vertical" size={20} color="gray" />
          </View>
          <Text style={styles.sectionTitle}>{props.title}</Text>
          <Text style={styles.sectionDescription}>{props.description}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <IconText
              icon="dollar-sign"
              text="400.66"
              color="seagreen"
              size={20}></IconText>
            <IconText icon="share" text="200" color="gray" size={20}></IconText>
            <IconTextButton
              icon="thumbs-up"
              text="1.2k"
              color="gray"
              size={20}
              changedColor="mediumslateblue"></IconTextButton>
            <IconTextButton
              icon="thumbs-down"
              text="200"
              color="gray"
              size={20}
              changedColor="mediumslateblue"></IconTextButton>
          </View>
        </View>
        <View style={{flex: 1, margin: 5}}>
          <View style={{flex: 1}}>
            <Comment description="This is great but I don't think this is the way to go about it. Police need protection to do their job." posterName='Srikar Parsi' posterHandle='sparsi' posterImageUrl={srikarImage} ago='1 hour'>
              <CommentReply description="I'm not sure what you mean by that. Don't they have enough protections to begin with?" posterName='Rishi Bengani' posterHandle='rbengani' posterImageUrl={rishiImage} ago='40 mins'>
                <CommentReply description="I'm not too sure actually..." posterName='Srikar Parsi' posterHandle='sparsi' posterImageUrl={srikarImage} ago='1 hour'></CommentReply>
                <CommentReply description="What would an example of these protections be?" posterName='Srikar Parsi' posterHandle='sparsi' posterImageUrl={srikarImage} ago='1 hour'></CommentReply>
              </CommentReply>
            </Comment>
            <Comment description="Tanuj I love your posts! I think you should run." posterName='Rishi Bengani' posterHandle='rbengani' posterImageUrl={rishiImage} ago='40 mins'></Comment>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default PostScreen;
