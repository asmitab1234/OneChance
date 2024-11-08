import { View, Image, Dimensions, Animated, TouchableOpacity } from 'react-native';
import React, { useCallback, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Text } from 'react-native-basic-elements';
import MatchesChoice from './MatchesChoice';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
const { height, width } = Dimensions.get('window');
const MatchesCard = ({ item, isFirst, swipe, ...rest }) => {
    const rotate = swipe.x.interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ['-8deg', '0deg', '8deg'],
    });
    const likeOpacity = swipe.x.interpolate({
        inputRange: [10, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });
    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-100, -10],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    const tinderSelection = useCallback(() => {
        return (
            <>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 60,
                        right: 20,
                        opacity: nopeOpacity,
                        transform: [{ rotate: '30deg' }],
                    }}>
                    <MatchesChoice type={'Nope'} />
                </Animated.View>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 60,
                        left: 20,
                        opacity: likeOpacity,
                        transform: [{ rotate: '-30deg' }],
                    }}>
                    <MatchesChoice type={'Like'} />
                </Animated.View>
            </>
        );
    }, []);
    return (
        <Animated.View
            style={[
                {
                    width: width - 20,
                    height: height - 150,
                    alignSelf: 'center',
                    position: 'absolute',
                    top: 10,
                    borderRadius: 10,
                    // zIndex: isFirst ? 1 : 0
                },
                isFirst && {
                    transform: [...swipe.getTranslateTransform(), { rotate: rotate }],
                },
            ]}
            {...rest}>
            <Image
                source={item.image}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,

                }}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    position: 'absolute',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 100,
                        left: 20,
                    }}>
                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            color: '#fff',
                            fontSize: moderateScale(25),
                        }}>
                        {item.title}
                    </Text>               
                </View>
            </LinearGradient>
            {isFirst && tinderSelection()}
        </Animated.View>
    );
};

export default MatchesCard;