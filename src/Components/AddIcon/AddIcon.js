import React from 'react';
import {
  Image, Pressable, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import plusIcon from '../../static/assets/img/white_plus.png';
import ScreensNames from '../../screens/ScreensNames';

export default function AddIcon({ onPress }) {
  const { navigate } = useNavigation();
  const goToLogin = () => {
    navigate(ScreensNames.LOGIN);
  };
  return (
    <TouchableOpacity onPress={goToLogin} style={{ paddingHorizontal: 15, }}>
      <Image source={plusIcon} style={{ width: 15, height: 15 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
