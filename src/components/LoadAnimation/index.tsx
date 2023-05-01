import React from 'react';
import { Container } from './styles';

import LottieView from 'lottie-react-native'
import CarAnimation from '../../assets/CarAnimation.json'
export function LoadAnimation() {
  return (
    <Container>
        <LottieView source={CarAnimation} autoPlay style={{height:200}} resizeMode='contain' loop/>
    </Container>
  );
}