import { Image, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, Icon } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { Animated } from 'react-native'
import MatchesCard from '../../Components/Matches/MatchesCard'
import NavigationService from '../../Services/Navigation'

const Matches = () => {
  const [data, setData] = useState([
    { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
    { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
    { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
    { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
    { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
    { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
    { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
    { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
  ]);
  useEffect(() => {
    if (!data.length) {
      setData([
        { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
        { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
        { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
        { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
        { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
        { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
        { image: require('../../Assets/images/img1.jpg'), id: 1, title: 'Joy, 22', },
        { image: require('../../Assets/images/img2.jpg'), id: 2, title: 'Mithi, 29' },
      ]);
    }
  }, [data]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      console.log('dx:' + dx + ' dy:' + dy);
      swipe.setValue({ x: dx, y: dy });
    },

    onPanResponderRelease: (_, { dx, dy }) => {
      console.log('released:' + 'dx:' + dx + ' dy:' + dy);
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: { x: 500 * dx, y: dy },
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prepState => prepState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handelSelection = useCallback(
    direction => {
      Animated.timing(swipe, {
        toValue: { x: direction * 500, y: 0 },
        useNativeDriver: true,
        duration: 500,
      }).start(removeCard);
    },
    [removeCard],
  );
  return (
    <Container>
      <BackHeader title={'Preferred Matches'} />
      <View style={{ flex: 1 }}>
        {data
          .map((item, index) => {
            let isFirst = index === 0;
            let dragHanlders = isFirst ? panResponser.panHandlers : {};
            return (
              <MatchesCard
                item={item}
                rotate={rotate}
                isFirst={isFirst}
                swipe={swipe}
                {...dragHanlders}
              />
            );
          })
          .reverse()}

        <View
          style={{
            width: '100%',
            position: 'absolute',
            height: 100,
            bottom: 25,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#fff',
              elevation: 5,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              handelSelection(-1);
            }}>
            <Image
              source={require('../../Assets/images/close.png')}
              style={{ width: 34, height: 34 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#fff',
              elevation: 5,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}

            onPress={() => NavigationService.navigate('MatchDetails')}
          >
            <Icon
              name='infocirlce'
              type='AntDesign'
              size={25}

            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#fff',
              elevation: 5,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              handelSelection(1);
            }}>
            <Image
              source={require('../../Assets/images/heart.png')}
              style={{
                width: 40,
                height: 40,
                tintColor: '#00FFC8'
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

export default Matches

const styles = StyleSheet.create({})