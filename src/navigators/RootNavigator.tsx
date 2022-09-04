import React, {useState} from 'react';
import {AuthNavigator} from './AuthNavigator';
import {DashboardNavigator} from './DashboardNavigator';

export const RootNavigator = () => {
  const [isLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <DashboardNavigator />;
};
