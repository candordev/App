import type { PropsWithChildren } from 'react';
import React from 'react';
import { View } from 'react-native';

import colors from '../../Styles/colors';
import styles from '../../Styles/styles';
import IconTextButton from '../IconTextButton';
import ProfilePicture from '../ProfilePicture';

import Text from '../Native/Text';

type ProfileCommentProps = PropsWithChildren<{
      description: string;
}>;

let displayName = 'John M';
let handle = '@johnm';

const ago = '40 min';

const group = "4th District";

function ProfileComment({
  children,
  description,
}: ProfileCommentProps): JSX.Element {
  return (
    <View style={styles.commentContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <ProfilePicture imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Kansas_%281925%E2%80%931927%29.svg/223px-Flag_of_Kansas_%281925%E2%80%931927%29.svg.png' big={false}/>
        <View>
          <View style={{flexDirection: 'row'}}>
            {/* <Text style={{fontSize: 15, marginLeft: 10, color: colors.black}}>
              {displayName}
            </Text>
            <Text style={{fontSize: 15, marginLeft: 5, color: colors.gray}}>
              {handle}
            </Text> */}
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                marginTop: 3,
                color: colors.purple,
              }}>
              {group}
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
          size={20}
          changedColor={colors.purple}></IconTextButton>
        <IconTextButton
          icon="thumbs-down"
          text="200"
          color={colors.gray}
          size={20}
          changedColor={colors.purple}></IconTextButton>
      </View>
      <View>
        {children}
      </View>
    </View>
  );
}

export default ProfileComment;
