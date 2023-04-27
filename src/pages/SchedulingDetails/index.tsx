import React from 'react';

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../styles/theme';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/speed.svg';
  import { useNavigation } from '@react-navigation/native';
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
  Accessories,
  Footer,
  CalendarIcon,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';




export function SchedulingDetails() {

  const navigation = useNavigation()

  function handleConfirmRental(){
    navigation.navigate('SchedulingComplete')
  }
  
  return (
    <Container>
      <Header>
        <BackButton />
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
          <Accessory icon={SpeedSvg} name='380km' />
          <Accessory icon={AccelerationSvg} name='3.2' />
          <Accessory icon={ForceSvg} name='800 HP' />

          <Accessory icon={GasolineSvg} name='Gasolina' />
          <Accessory icon={ExchangeSvg} name='Auto' />
          <Accessory icon={PeopleSvg} name='2 pessoas' />
        </Accessories>

        <RentalPeriod>
          
          <CalendarIcon>
            <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>

            <DateTitle>DE</DateTitle>
            <DateValue>18/02/2030</DateValue>

          </DateInfo>

          <Feather name='chevron-right' size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>

            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/02/2030</DateValue>

          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Alugar agora' color={theme.colors.success} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}