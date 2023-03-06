import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    Image,
  Pressable,
  Text,
  View,
} from 'react-native';

import styles from '../Styles/styles';
import ProfilePicture from './ProfilePicture';
import ProgressBar from './ProgressBar';

import Icon from 'react-native-vector-icons/Feather';
import IconText from './IconText';
import IconTextButton from './IconTextButton';

type SectionProps = PropsWithChildren<{
    title: string;
    description: string;
    step: number;
    navigation: any;
  }>;

let displayName = "John M"
let handle = "@johnm"

let group = 'Kansas'
let date = 'March 1'

function Section({children, title, description, step, navigation}: SectionProps): JSX.Element {
    return (
        <Pressable
        onPress={() => {navigation.navigate('post', {title: title, description: description, step: step, group: group, displayName: displayName, handle: handle, date: date})}}
        >
            <View style={styles.sectionContainer}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <ProfilePicture imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Kansas_%281925%E2%80%931927%29.svg/223px-Flag_of_Kansas_%281925%E2%80%931927%29.svg.png' big={false}/>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 15, marginLeft: 10, color: 'black'}}>{displayName}</Text>
                            <Text style={{fontSize: 15, marginLeft: 5, color:'gray'}}>{handle}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 15, marginLeft: 10, marginTop: 3, color:'gray'}}>{date + ' ·'}</Text>
                            <Text style={{fontSize: 15, marginLeft: 5, marginTop: 3, color: 'mediumslateblue'}}>{group}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}></View>
                    <ProgressBar step={step}/>
                    <Icon name="more-vertical" size={20} color="gray" />
                </View>
                <Text
                    style={styles.sectionTitle}>
                    {title}
                </Text>
                <Text
                    style={styles.sectionDescription}>
                    {description}
                </Text>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:15}}>
                    <IconText icon='dollar-sign' text='400.66' color='seagreen' size={20}></IconText>
                    <IconText icon='message-square' text='275' color='gray' size={20}></IconText>
                    <IconTextButton icon='thumbs-up' text='1.2k' color='gray' size={20} changedColor='mediumslateblue'></IconTextButton>
                    <IconTextButton icon='thumbs-down' text='200' color='gray' size={20} changedColor='mediumslateblue'></IconTextButton>
                </View>
            </View>
        </Pressable>
    );
}

export default Section;