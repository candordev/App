import React, { useState } from 'react';
import {
    Pressable, View
} from 'react-native';
import IconText from './IconText';

type IconTextButtonProps = {
    icon: string,
    text: string,
    size: number,
    color: string,
    changedColor: string,
  };
  
function IconTextButton(props: IconTextButtonProps): JSX.Element {

    const [buttonColor, setButtonColor] = useState(props.color);

    return (
        <Pressable onPress={() => setButtonColor(buttonColor == props.color ? props.changedColor : props.color)}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <IconText icon={props.icon} size={props.size} color={buttonColor} text={props.text}/>
            </View>
        </Pressable>
        
    );
}

export default IconTextButton;