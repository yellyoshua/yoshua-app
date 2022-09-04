import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Screens} from '../enums';
import {HomeScreen, UsersScreen} from '../screens';

export type DashboardStackParamList = {
  [Screens.DashboardScreen]: {};
  [Screens.UsersScreen]: {};
};

export type DashboardNavigationProps =
  NativeStackNavigationProp<DashboardStackParamList>;

const Stack = createNativeStackNavigator<DashboardStackParamList>();

export const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.DashboardScreen} component={HomeScreen} />
      <Stack.Screen name={Screens.UsersScreen} component={UsersScreen} />
    </Stack.Navigator>
  );
};
