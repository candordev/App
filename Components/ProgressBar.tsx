import React from 'react';
import {
  View,
} from 'react-native';

type ProgressBarProps = {
    step : number;
  };
  
function ProgressBar(props: ProgressBarProps): JSX.Element {
    return (
        <View style={{flexDirection: 'row', width:101, height:17, borderColor:'#3a3a3a', borderWidth:1, marginRight:10, borderRadius:4, overflow:'hidden'}}>
            {props.step >= 1 && <View style={{width:33, height: 15, backgroundColor: '#e5e5e5'}} />}
            {props.step >= 2 && <View style={{width:33, height: 15, backgroundColor: '#c9c9c9'}} />}
            {props.step >= 3 &&<View style={{width:33, height: 15, backgroundColor: '#aeaeae'}} />}

            {/* <View style={{width:33, height: 15, backgroundColor: '#c4b8fd'}} />
            <View style={{width:33, height: 15, backgroundColor: '#b2a2fc'}} />
            <View style={{width:33, height: 15, backgroundColor: '#a08dfb'}} />  */}
        </View>
    );
}

export default ProgressBar;