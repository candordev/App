import {
  Platform,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 5,
      paddingHorizontal: 24,
      backgroundColor: '#fff',
      marginBottom:5,
      paddingTop:15,
      paddingBottom:15,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '500',
      marginTop:10
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: '400',
      color:'black',
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

    profilePictureBig: {
      height: 80,
      width: 80,
      borderRadius: 20,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: "gray",
    },
});

export default styles;