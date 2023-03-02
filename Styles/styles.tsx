import { 
  Platform,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 5,
      paddingHorizontal: 24,
      backgroundColor: '#fff',
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

    headerLeft: {
      flex: 1,
      flexDirection: 'row',
    },

    header: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },

    profilePicture: {
      height: 40,
      width: 40,
      borderRadius: 20,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: "gray",
    },
});

export default styles;