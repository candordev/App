import { Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function BackButton(props : any): JSX.Element {
    return <Pressable onPress={props.onPress} style={props.style}>
        <Icon name="chevron-left" size={30} color="gray" />
    </Pressable>
}

export default BackButton;