import {StyleSheet} from 'react-native';

export default function composeStyles() {
  return StyleSheet.create({
    root: {
      backgroundColor: 'red',
    },
    avatarContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    menuContainer: {
      flex: 1,
      height: '100%',
      marginVertical: 30,
      marginHorizontal: 50,
    },
    menuButton: {
      marginVertical: 10,
      flexDirection: 'row',
    },
    menuTexto: {},
  });
}
