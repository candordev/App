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
      borderWidth: 2,
      backgroundColor: colors.white,
      color: colors.gray,
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

    nextButton: {
      backgroundColor: colors.white,
      borderColor: colors.gray,
      borderWidth: 2,
      borderRadius: 4,
      padding: 5,
      marginBottom: 5,
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
      fontWeight: '400',
      color: colors.black,
      fontFamily: fonts.body,
    },
    replyContainer: {
      paddingHorizontal: 15,
      backgroundColor: colors.white,
      paddingTop:15,
      borderLeftWidth: 2,
      borderLeftColor: colors.gray
    },
});

export default styles;