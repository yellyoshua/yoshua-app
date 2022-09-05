import {StyleSheet} from 'react-native';

export default function composeStyles() {
  return StyleSheet.create({
    button: {
      margin: 10,
      padding: 10,
      backgroundColor: '#ddd',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#aaa',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  });
}
