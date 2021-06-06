import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeModules, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Amplify from 'aws-amplify';
import PushNotification from '@aws-amplify/pushnotification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStack from './src/Navigators/RootStack';
import { navigatorRef } from './src/Navigators/navigator';
import config from './src/aws-exports';

Amplify.configure({ ...config, });
// get the notification data when notification is received

PushNotification.onNotification((notification) => {
  // Note that the notification object structure is different from Android and IOS
  console.log('in app notification', notification);

  // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/push-notification-ios#finish)
});

// get the registration token
// This will only be triggered when the token is generated or updated.
PushNotification.onRegister((token) => {
  console.log('in app registration', token);
  alert(token);
});

// get the notification data when notification is opened
PushNotification.onNotificationOpened((notification) => {
  console.log('the notification is opened', notification);
});

const App = () => {
  const getTotken = () => AsyncStorage.getItem(`push_token${config.aws_mobile_analytics_app_id}`);

  useEffect(() => {
    // getTotken().then((token) => alert(token));
    NativeModules.RNPushNotification.getToken((token) => console.log(token));
  });
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer ref={navigatorRef}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
