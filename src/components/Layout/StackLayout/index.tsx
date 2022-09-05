import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import composeStyles from './styles';

interface PropTypes {
  children: React.ReactNode;
}

export function StackLayout({children}: PropTypes) {
  const isDarkMode = useColorScheme() === 'dark';
  const navigator = useNavigation();

  const styles = composeStyles({isDarkMode});

  useEffect(() => {
    navigator.setOptions({
      headerStyle: {flex: 1},
    });
  }, [navigator]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
