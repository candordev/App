import React, { ReactComponentElement } from 'react';
import type {PropsWithChildren} from 'react';
import {View} from 'react-native';

import Text from './Native/Text';

import styles from '../Styles/styles';
import ProfilePicture from './ProfilePicture';
import ProgressBar from './ProgressBar';

import Icon from 'react-native-vector-icons/Feather';
import IconText from './IconText';
import IconTextButton from './IconTextButton';
import colors from '../Styles/colors';

type CommentProps = PropsWithChildren<{
      description: string;
}>;

let displayName = 'John M';
let handle = '@johnm';

const ago = '40 min';

function Comment({
  children,
  description,
}: CommentProps): JSX.Element {
  return (
    <View style={styles.commentContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProfilePicture
          imageUrl="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/244305674_1199851353874099_7498215930166384149_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=hB9YE6db7AIAX_HgwSF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCpwZNohvZhEMUcJuq0ytfmPCui_c-jViJc7cmjZ8AYew&oe=64058AA8&_nc_sid=8fd12b"
          big={false}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15, marginLeft: 10, color: colors.black}}>
              {displayName}
            </Text>
            <Text style={{fontSize: 15, marginLeft: 5, color: colors.gray}}>
              {handle}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                marginTop: 3,
                color: colors.gray,
              }}>
              {ago + ' ago'}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <Text style={styles.commentDescription}>{description}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          columnGap: 15,
        }}>
        {/* <IconText icon='dollar-sign' text='400.66' color='seagreen' size={20}></IconText> */}
        {/* <IconText icon='message-square' text='275' color='gray' size={20}></IconText> */}
        <IconTextButton
          icon="thumbs-up"
          text="1.2k"
          color={colors.gray}
          size={18}
          changedColor={colors.purple}></IconTextButton>
        <IconTextButton
          icon="thumbs-down"
          text="200"
          color={colors.gray}
          size={18}
          changedColor={colors.purple}></IconTextButton>
      </View>
      <View>
        {children}
      </View>
    </View>
  );
}

export default Comment;
