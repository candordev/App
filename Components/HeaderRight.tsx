import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

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
            containerStyle={{height:40, width: 180, paddingRight: 10}}
            style={styles.dropdownStyle}
            textStyle={{fontSize: 18, color: 'gray', fontWeight: '600'}}
            dropDownContainerStyle={[styles.dropdownStyle, {borderTopWidth: 1}]}
            ArrowDownIconComponent={() => <Icon name={'chevron-down'} size={20} color={'gray'}/>}
            ArrowUpIconComponent={() => <Icon name={'chevron-up'} size={20} color={'gray'}/>}
            TickIconComponent={() => <Icon name={'git-commit'} size={20} color={'gray'}/>}
        />
        <Icon name="search" size={30} color="gray"/>
    </View>
}

export default HeaderRight;