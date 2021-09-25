import React from 'react';
import {
  ActivityIndicator, StyleSheet, Text, View
} from 'react-native';

const FullScreenLoader = ({
  color
}) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={color} />
  </View>
);

export default FullScreenLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
