import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {DrawerContent} from '../ui/Drawer';
import {Screens} from '../enums';
import {HomeScreen, UsersScreen} from '../screens';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={Screens.HomeScreen} component={HomeScreen} />
      <Drawer.Screen name={Screens.UsersScreen} component={UsersScreen} />
    </Drawer.Navigator>
  );
}
