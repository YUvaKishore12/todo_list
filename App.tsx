/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MyTabs from './src/navigation/Bottomtab';
import {NavigationContainer} from '@react-navigation/native';
import NavigationFlow from './src/navigation/NavigationFlow';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationFlow />
    </NavigationContainer>
  );
}

export default App;
