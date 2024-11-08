import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const Thumb = ({name}) => {
  const colors = useTheme()
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: '#FF2168',
    backgroundColor: '#fff',
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);