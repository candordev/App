import { 
  Platform,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    headerRight: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Platform.OS === 'ios' ? 10 : 0,
    },
    
    dropdownStyle: {
      borderColor: 'gray',
      borderWidth: 2,
      backgroundColor: '#fff',
      color: 'gray',
      minHeight: 40,
    },
});

export default styles;