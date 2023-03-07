import React from 'react';
import {
  View,
} from 'react-native';
import Text from './Native/Text';

import styles from '../Styles/styles';

import Icon from 'react-native-vector-icons/Feather';

type IconTextProps = {
    icon: string,
    text: string,
    size: number,
    color: string,
  };
  
function IconText(props: IconTextProps): JSX.Element {
    return (
        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Icon name={props.icon} size={props.size} color={props.color}/>
            <Text style={{color:props.color, marginLeft:5, fontWeight:'500'}}>{props.text}</Text>
        </View>
    );
}

export default IconText;