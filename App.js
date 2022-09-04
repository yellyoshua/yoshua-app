import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigators';
import {Provider} from 'react-redux';
import generateStore from './src/store/store';

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
