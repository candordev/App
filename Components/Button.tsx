
import {Pressable } from 'react-native';
import styles from '../Styles/styles';
import Text from './Native/Text';

type ButtonProps = {
    name: string;
    onPress: () => void;
}

function Button(props : ButtonProps): JSX.Element {
    return <Pressable style={styles.button} onPress={props.onPress}>
    <Text style = {{fontSize: 15, color: 'gray', fontWeight: '500', fontFamily: 'Montserrat-Regular'}}>{props.name}</Text>
    </Pressable>
}

export default Button;