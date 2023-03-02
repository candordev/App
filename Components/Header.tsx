//COULD NOT FIGURE OUT - NOT WORKING

import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { SafeAreaView } from 'react-native-safe-area-context';

function Header(props: any): JSX.Element {
    return <SafeAreaView style = {styles.header}>
        {props.leftButton ? props.leftButton : <HeaderLeft></HeaderLeft>}
        <HeaderRight></HeaderRight>
    </SafeAreaView>
}

export default Header;
