//COULD NOT FIGURE OUT - NOT WORKING

import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../Styles/styles';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

function Header(props: any): JSX.Element {
    return <SafeAreaView style = {styles.header}>
        {props.leftButton ? props.leftButton : <HeaderLeft></HeaderLeft>}
        <HeaderRight></HeaderRight>
    </SafeAreaView>
}

export default Header;