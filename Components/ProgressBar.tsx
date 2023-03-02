import React from 'react';
import {
  View,
} from 'react-native';

import styles from '../Styles/styles';

type ProgressBarProps = {
    step : number;
  };
  
function ProgressBar(props: ProgressBarProps): JSX.Element {
    return (
        <View style={{flexDirection: 'row', width:102, height:17, borderColor:'black', borderWidth:1}}>
            <View style={{width:25, height: 15, backgroundColor: 'powderblue'}} />
            <View style={{width:25, height: 15, backgroundColor: 'skyblue'}} />
            <View style={{width:25, height: 15, backgroundColor: 'steelblue'}} />
            <View style={{width:25, height: 15, backgroundColor: 'royalblue'}} />
        </View>
    );
}

export default ProgressBar;