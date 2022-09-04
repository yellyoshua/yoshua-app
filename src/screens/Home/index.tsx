import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HomeContent} from '../HomeContent';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerStyle: {flex: 1},
    });
  }, [navigator]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <HomeContent />
      </ScrollView>
    </SafeAreaView>
  );
};
