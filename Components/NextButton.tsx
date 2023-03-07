
import {Pressable } from 'react-native';
import styles from '../Styles/styles';
import Text from './Native/Text';

function NextButton(props : any): JSX.Element {
    return <Pressable style={styles.nextButton} onPress={props.onPress}>
    <Text style = {{fontSize: 15, color: 'gray', fontWeight: '500', fontFamily: 'Montserrat-Regular'}}>{props.name}</Text>
    </Pressable>
}

export default NextButton;