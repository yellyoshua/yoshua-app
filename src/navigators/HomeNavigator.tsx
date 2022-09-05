import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Screens} from '../enums';
import {HomeScreen, UsersScreen} from '../screens';

export type HomeStackParamList = {
  [Screens.HomeScreen]: {};
  [Screens.UsersScreen]: {};
};

export type HomeNavigationProps = NativeStackNavigationProp<HomeStackParamList>;

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HomeScreen}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name={Screens.UsersScreen}
        component={UsersScreen}
        options={{title: 'Users'}}
      />
    </Stack.Navigator>
  );
};
