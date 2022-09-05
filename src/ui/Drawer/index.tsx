import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Spacer} from '../../components/Spacer';
import composeStyles from './styles';

export const DrawerContent = ({}: DrawerContentComponentProps) => {
  const styles = composeStyles();

  return (
    <DrawerContentScrollView style={styles.root}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://s3.us-east-2.amazonaws.com/media.trivo.com.ec/Users/1569966253068-lg.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuTexto}> Leads</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuTexto}> Recordatorios</Text>
        </TouchableOpacity>
      </View>

      <Spacer />

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
          <Text style={styles.menuTexto}> Github Profile</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
