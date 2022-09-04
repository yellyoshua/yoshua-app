import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PublicScreens} from '../enums';
import {LoginScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PublicScreens.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};
