import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigators';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
