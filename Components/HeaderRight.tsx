import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

function HeaderRight(): JSX.Element {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('featured');
    const [items, setItems] = useState([
        {label: 'Featured', value: 'featured'},
        {label: 'Local', value: 'local'},
        {label: 'State', value: 'state'},
        {label: 'National', value: 'national'}
    ]);

    return <View style = {styles.headerRight}>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={{height:35, width: 135, paddingRight: 10}}
            style={styles.dropdownStyle}
            textStyle={{fontSize: 15, color: 'gray', fontWeight: '500', fontFamily: 'Montserrat-Regular'}}
            dropDownContainerStyle={[styles.dropdownStyle, {borderTopWidth: 1}]}
            ArrowDownIconComponent={() => <Icon name={'chevron-down'} size={20} color={'gray'}/>}
            ArrowUpIconComponent={() => <Icon name={'chevron-up'} size={20} color={'gray'}/>}
            TickIconComponent={() => <Icon name={'git-commit'} size={20} color={'gray'}/>}
        />
        <AntDesignIcon name="search1" size={28} color="gray"/>
    </View>
}

export default HeaderRight;