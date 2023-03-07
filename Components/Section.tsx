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
import { useState } from 'react';
import { users, groups } from '../data';

type SectionProps = PropsWithChildren<{
    title: string;
    description: string;
    step: number;
    posterUID: number;
    raised: number;
    numComments: number;
    likes: string;
    dislikes: string;
    date: string,
    group: string,
    uid: number;
    navigation: any;
}>;

function Section({children, title, description, step, posterUID, raised, numComments, likes, dislikes, date, group, uid, navigation}: SectionProps): JSX.Element {
    const user = users.findIndex((u) => {return u.uid == uid});
    const groupIdx = groups.findIndex((g) => {return g.name == group});
    let displayName = "Loading...";
    let handle = "Loading...";
    let url = "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";
    // const [displayName, setDisplayName] = useState("Loading...");
    // const [handle, setHandle] = useState("Loading...");
    // const [url, setUrl] = useState("https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg");

    if (user != -1) {
        displayName = users[user].displayName;
        handle = users[user].handle;
        url = groups[groupIdx].pic;
    }

    return (
        <Pressable
        onPress={() => {navigation.navigate('post', {title: title, description: description, step: step, group: group, displayName: displayName, handle: handle, date: date})}}
        >
            <View style={styles.sectionContainer}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <ProfilePicture imageUrl={url} big={false}/>
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
                    <IconText icon='dollar-sign' text={raised + ''} color='seagreen' size={20}></IconText>
                    <IconText icon='message-square' text={numComments + ''} color='gray' size={20}></IconText>
                    <IconTextButton icon='thumbs-up' text={likes} color='gray' size={20} changedColor='mediumslateblue'></IconTextButton>
                    <IconTextButton icon='thumbs-down' text={dislikes} color='gray' size={20} changedColor='mediumslateblue'></IconTextButton>
                </View>
            </View>
        </Pressable>
    );
}

export default Section;