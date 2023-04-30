import React from 'react';
import { StyleSheet } from 'react-native'
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import { GetAccessoryIcon } from '../../utils/getAccessoryIcon';

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { CarDTO } from '../../DTOS/CarDto';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';




interface Params {
  car: CarDTO
}

export function CarDetails() {
  const theme = useTheme()
  const route = useRoute();

  const { car } = route.params as Params

  const navigation = useNavigation()

  const ScrollY = useSharedValue(0);

  const ScrollHandler = useAnimatedScrollHandler(event => {
    ScrollY.value = event.contentOffset.y
    console.log(event.contentOffset.y)
  })

  const HeaderStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        ScrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP
      )
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        ScrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP
      )
    }
  })
  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car })
  }

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <Container>

      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor='transparent'
      />

      <Animated.View style={[
        HeaderStyleAnimation, styles.header,
        {backgroundColor: theme.colors.background_secondary}
        ]}>
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>

        <Animated.View style={sliderCarsStyleAnimation}>
          <CarImages>
            <ImageSlider ImagesUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={ScrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                icon={GetAccessoryIcon(accessory.type)}
                name={accessory.name} />
            ))
          }
        </Accessories>
        <About>{car.about}</About>

      </Animated.ScrollView>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
 })