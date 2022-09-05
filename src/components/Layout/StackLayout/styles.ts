import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  isDarkMode: boolean;
}

export default function composeStyles({isDarkMode}: Props) {
  return StyleSheet.create({
    scrollView: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
    safeAreaView: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
  });
}
