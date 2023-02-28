import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

function HeaderLeft(): JSX.Element {

    return <View style={styles.headerLeft}>
    <Text style={{color:'gray', fontSize:25}}>
      Candor
    </Text>
  </View>
}

export default HeaderLeft;