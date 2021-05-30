import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight, Alert,
} from 'react-native';
import { useShowBackAlert } from '../../hooks';

const LoginContainer = ({ navigation }) => {
  const hasUnsavedChanges = Boolean(true);
  useShowBackAlert(navigation, hasUnsavedChanges);

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <Text />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginContainer;
