import {Text, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

function NextButton(props : any): JSX.Element {
    return <Pressable style={styles.nextButton} onPress={props.onPress}>
    <Text style = {{color: 'black'}}>Next</Text>
    </Pressable>
}

export default NextButton;