import React from 'react';
import {
  Image,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../Styles/styles';

type ProfilePictureProps = {
    imageUrl: string;
    big: boolean;
  };

function ProfilePicture(props: ProfilePictureProps): JSX.Element {
    return (
        <TouchableHighlight onPress={() => console.log('I am Jain and I am pressed')}>
            <Image source={{ uri: props.imageUrl}} style={props.big ? styles.profilePictureBig : styles.profilePicture} />
        </TouchableHighlight>
    );
}

export default ProfilePicture;