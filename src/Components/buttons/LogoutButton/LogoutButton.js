import React from 'react';
import {
  Image, Pressable, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Amplify, { Auth } from 'aws-amplify';
import plusIcon from '../../../static/assets/img/exit-logout-2857.png';
import ScreensNames from '../../../screens/ScreensNames';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/actions/user';

export default function LogoutButton({ onPress }) {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const goToLogin = () => {
    Auth.signOut();
    dispatch(userActions.getUser());
    // navigate(ScreensNames.SELECT_EXPERIMENT);
  };
  return (
    <TouchableOpacity onPress={goToLogin} style={{ paddingHorizontal: 15, }}>
      <Image source={plusIcon} style={{ width: 20, height: 20, tintColor: 'white' }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
