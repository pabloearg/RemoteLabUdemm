import React from 'react';
import {
  Image, Pressable, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import plusIcon from '../../static/assets/img/white_plus.png';

export default function AddIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 15, }}>
      <Image source={plusIcon} style={{ width: 15, height: 15 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
