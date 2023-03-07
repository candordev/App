import { View } from 'react-native';
import styles from '../Styles/styles';
import Text from './Native/Text';

function HeaderLeft(): JSX.Element {

    return <View style={styles.headerLeft}>
    <Text style={{color:'gray', fontSize:25}}>
      Candor
    </Text>
  </View>
}

export default HeaderLeft;