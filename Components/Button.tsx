
import {Pressable } from 'react-native';
import styles from '../Styles/styles';
import Text from './Native/Text';

type ButtonProps = {
    title: string;
    style: any;
    textStyle: any;
    onPress: () => void;
}

function Button(props : ButtonProps): JSX.Element {
    return <Pressable style={[styles.button, props.style]} onPress={props.onPress}>
        <Text style = {[{fontSize: 15, color: 'gray', fontWeight: '500', fontFamily: 'Montserrat-Regular'}, props.textStyle]}>{props.title}</Text>
    </Pressable>
}

export default Button;