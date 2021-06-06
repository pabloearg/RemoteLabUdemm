import React from 'react';
import {
  ActivityIndicator, StyleSheet, Text, View
} from 'react-native';

const FullScreenLoader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
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
