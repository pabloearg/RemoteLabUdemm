import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonLarge from '../../Components/ButtonLarge/ButtonLarge';
import ScreensNames from '../ScreensNames';
// import { ButtonLarge } from '../../Components/ButtonLarge/ButtonLarge';

const Splash = ({ navigation }) => (
  <View>
    <Text />
    <ButtonLarge
      backgroundColor="red"
      text="next"
      onPress={() => navigation.navigate(ScreensNames.LOGIN)}
    />
  </View>
);

const styles = StyleSheet.create({});

export default Splash;
