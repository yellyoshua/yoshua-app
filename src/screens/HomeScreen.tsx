import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {HomeContent} from './HomeContent';
import {StackLayout} from '../components/Layout';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerRight: () => {
        return <Text>Sign in</Text>;
      },
    });
  }, [navigator]);

  return (
    <StackLayout>
      <HomeContent />
    </StackLayout>
  );
};
