import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

function BackButton(props : any): JSX.Element {

    return <TouchableOpacity onPress={props.onPress}>
    <Icon name="chevron-left" size={30} color="gray" />
    </TouchableOpacity>
}

export default BackButton;