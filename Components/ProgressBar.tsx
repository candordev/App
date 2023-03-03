import React from 'react';
import {
  View,
} from 'react-native';

type ProgressBarProps = {
    step : number;
  };
  
function ProgressBar(props: ProgressBarProps): JSX.Element {
    return (
        <View style={{flexDirection: 'row', width:102, height:17, borderColor:'#3a3a3a', borderWidth:1, marginRight:10, borderRadius:4, overflow:'hidden'}}>
            <View style={{width:25, height: 15, backgroundColor: '#e5e5e5'}} />
            <View style={{width:25, height: 15, backgroundColor: '#c9c9c9'}} />
            <View style={{width:25, height: 15, backgroundColor: '#aeaeae'}} />
            <View style={{width:25, height: 15, backgroundColor: '#838383'}} />
        </View>
    );
}

export default ProgressBar;