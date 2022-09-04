import React, {useState} from 'react';
import {AuthNavigator} from './AuthNavigator';
import {HomeNavigator} from './HomeNavigator';

export const RootNavigator = () => {
  const [isLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <HomeNavigator />;
};
