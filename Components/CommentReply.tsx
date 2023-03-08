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

type CommentReplyProps = PropsWithChildren<{
  posterName: string;
  posterHandle: string;
  posterImageUrl: string;
  ago: string;
  description: string;
}>;

function CommentReply({
  children,
  ...props
}: CommentReplyProps): JSX.Element {
  return (
    <View style={styles.replyContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProfilePicture
          imageUrl={props.posterImageUrl}
          big={false}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15, marginLeft: 10, color: colors.black}}>
              {props.posterName}
            </Text>
            <Text style={{fontSize: 15, marginLeft: 5, color: colors.gray}}>
              {props.posterHandle}
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
              {props.ago + ' ago'}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <Text style={styles.commentDescription}>{props.description}</Text>
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

export default CommentReply;
