import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../enums';
import {DashboardNavigationProps} from '../navigators';

export const HomeContent = () => {
  const navigation = useNavigation<DashboardNavigationProps>();

  const goToUsersList = () => {
    navigation.navigate(Screens.UsersScreen, {});
  };

  return (
    <View style={styles.container}>
      <Text>Home Content</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={goToUsersList}>
        <Text>Go to Users List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
