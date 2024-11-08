import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const RailSelected = () => {
  const colors = useTheme()
  return (
    <View style={{...styles.root,
      backgroundColor: colors.primaryThemeColor,
    }}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 4,
  
    borderRadius: 2,
  },
});