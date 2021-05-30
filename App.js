import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStack from './src/Navigators/RootStack';
import { navigatorRef } from './src/Navigators/navigator';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer ref={navigatorRef}>
      <RootStack />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
