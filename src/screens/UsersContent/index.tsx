import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../enums';
import {HomeNavigationProps} from '../../navigators';
import composeStyles from './styles';

export const UsersContent = () => {
  const styles = composeStyles();
  const navigation = useNavigation<HomeNavigationProps>();

  const goToDashBoard = () => {
    navigation.navigate(Screens.HomeScreen, {});
  };

  return (
    <View style={styles.container}>
      <Text>Home Content</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={goToDashBoard}>
        <Text>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};
