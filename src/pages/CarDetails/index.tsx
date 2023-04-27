import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/speed.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
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




export function CarDetails() {

  const navigation = useNavigation()

  function handleConfirmRental(){
    navigation.navigate('Scheduling')
  }

  function handleGoBack(){
    navigation.goBack
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}/>
      </Header>

      <CarImages>
        <ImageSlider ImagesUrl={['https://i.pinimg.com/originals/cb/7e/3a/cb7e3a7103f1f6416ae37dbf6ec1bc56.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS 7 Coupé</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory icon={SpeedSvg} name='380km'/>
          <Accessory icon={AccelerationSvg} name='3.2'/>
          <Accessory icon={ForceSvg} name='800 HP'/>
          
          <Accessory icon={GasolineSvg} name='Gasolina'/>
          <Accessory icon={ExchangeSvg} name='Auto'/>
          <Accessory icon={PeopleSvg} name='2 pessoas'/>
        </Accessories>
        <About>Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.</About>
      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}