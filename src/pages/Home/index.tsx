import React, { useEffect, useState } from 'react';

import { StatusBar, StyleSheet, BackHandler} from 'react-native'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../DTOS/CarDto';
import { api } from '../../services/api';
import { LoadAnimation } from '../../components/LoadAnimation';
import { Ionicons } from '@expo/vector-icons'
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
  const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles';




export function Home() {
  const theme = useTheme();
  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const MyCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart( _ , ctx: any){
      ctx.positionX = positionX.value;
      ctx.positionY = positionX.value
    },
    onActive(event, ctx : any){
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionX + event.translationY;
    },
    onEnd(){
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  })

  const navigation = useNavigation();


  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setloading] = useState(true)

  const TotalCarsCount = cars.length

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car })
  }


  useEffect(() => {

    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setloading(false)
      }
    }
    fetchCars()
  }, [])

useEffect(()=> {
  BackHandler.addEventListener('hardwareBackPress', () => {
    return true
  })
},[])

  return (
    <Container>

      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo
            height={RFValue(12)}
            width={RFValue(108)}
          />
 {
        !loading &&
          <TotalCars>
            Total de {TotalCarsCount} carros
          </TotalCars>
}
        </HeaderContent>
      </Header>

      {
        loading ? <LoadAnimation /> :
          <CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
      }
      <PanGestureHandler onGestureEvent={onGestureEvent}>

        <Animated.View style={[MyCarsButtonStyle,
          { position: 'absolute', bottom: 13, right: 22, }
        ]}>

          <ButtonAnimated
            onPress={() => navigation.navigate('MyCars')}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons name='ios-car-sport' size={32} color={theme.colors.shape} />
          </ButtonAnimated>

        </Animated.View>

      </PanGestureHandler>

    </Container >
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  }
})