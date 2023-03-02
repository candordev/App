import React from 'react';
import {
    Image,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../Styles/styles';

type ProfilePictureProps = {
    imageUrl: string;
  };
  
function ProfilePicture(props: ProfilePictureProps): JSX.Element {
    return (
        <TouchableHighlight onPress={() => console.log('pressed')}>
            <Image source={{ uri: props.imageUrl}} style={styles.profilePicture} />
        </TouchableHighlight>
    );
}

export default ProfilePicture;