import {View, } from 'react-native';
import React from 'react';
import { Text } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

const MatchesChoice = ({type}) => {
  return (
    <View>
      <Text
        style={{
          color: type == 'Like' ? '#01FF84' : '#F6006B',
          fontSize: moderateScale(20),
          fontFamily:FONTS.medium,
          borderWidth: 4,
          borderColor: type == 'Like' ? '#01FF84' : '#F6006B',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        {type}
      </Text>
    </View>
  );
};

export default MatchesChoice;