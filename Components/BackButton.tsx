import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function BackButton(props : any): JSX.Element {

    return <TouchableOpacity onPress={props.onPress}>
    <Icon name="chevron-left" size={30} color="gray" />
    </TouchableOpacity>
}

export default BackButton;