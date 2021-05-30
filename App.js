import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';
import RootStack from './src/Navigators/RootStack';
import { navigatorRef } from './src/Navigators/navigator';

const App = () => (
  <SafeAreaProvider>
    <StatusBar barStyle="light-content" />
    <NavigationContainer ref={navigatorRef}>
      <RootStack />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
