import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

type ProgressBarProps = {
    step : number;
  };
  
function ProgressBar(props: ProgressBarProps): JSX.Element {
    return (
        <View style={{flexDirection: 'row', width:101, height:17, borderColor:'#3a3a3a', borderWidth:1, marginRight:10, borderRadius:4, overflow:'hidden'}}>
            {/* {props.step >= 1 && <LinearGradient colors={['#c4b8fd', '#b2a2fc', '#a08dfb']}></LinearGradient>}
            {props.step >= 2 && <View style={{width:33, height: 15, backgroundColor: '#c9c9c9'}} />}
            {props.step >= 3 &&<View style={{width:33, height: 15, backgroundColor: '#aeaeae'}} />} */}

{/* <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']}>
  <Text>
    Sign in with Facebook
  </Text>
</LinearGradient> */}

        {props.step == 1 && <LinearGradient
          colors={['#dcd5ff', '#cec4ff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{width:33, height: 15}}
        />}
        {props.step == 2 && <LinearGradient
          colors={['#dcd5ff', '#b8a9ff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{width:66, height: 15}}
        />}
        {props.step == 3 && <LinearGradient
          colors={['#dcd5ff', '#a997ff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{width:99, height: 15}}
        />}

            {/* <View style={{width:33, height: 15, backgroundColor: '#c4b8fd'}} />
            <View style={{width:33, height: 15, backgroundColor: '#b2a2fc'}} />
            <View style={{width:33, height: 15, backgroundColor: '#a08dfb'}} />  */}
        </View>
    );
}

export default ProgressBar;