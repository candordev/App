import {
  Platform,
    StyleSheet,
} from 'react-native';
import colors from './colors';
import fonts from './fonts';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 10,
      paddingHorizontal: 15,
      backgroundColor: colors.white,
      paddingTop:15,
      paddingBottom:15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '500',
      marginTop:10,
      fontFamily: fonts.title,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 14,
      fontWeight: '400',
      color:'black',
      fontFamily: fonts.body,
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
      borderColor: colors.gray,
      borderWidth: 1.5,
      backgroundColor: colors.white,
      color: colors.gray,
      minHeight: 35,
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
      borderColor: colors.gray,
    },

    profilePictureBig: {
      height: 80,
      width: 80,
      borderRadius: 20,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.gray,
    },

    button: {
      backgroundColor: colors.white,
      borderColor: colors.gray,
      borderWidth: 1.5,
      borderRadius: 7,
      paddingVertical: 7,
      paddingHorizontal: 10,
      marginBottom: Platform.OS === 'ios' ? 10 : 0,
    },
    commentContainer: {
      paddingHorizontal: 15,
      backgroundColor: colors.white,
      paddingTop:15,
      paddingBottom:15,
      marginTop: 10,
    },
    commentDescription: {
      marginTop: 4,
      fontSize: 14,
      marginBottom: 5,
      fontWeight: '400',
      color: colors.black,
      fontFamily: fonts.body,
    },
    replyContainer: {
      paddingHorizontal: 15,
      backgroundColor: colors.white,
      paddingTop:15,
      borderLeftWidth: 2,
      borderLeftColor: colors.lightgray,
    },
    text: {
      color: 'black',
      fontFamily: 'OpenSans-Regular',
    },
    headerText: {
      color: 'black',
      fontSize: 20,
      fontFamily: 'Montserrat-Regular',
    }
});

export default styles;