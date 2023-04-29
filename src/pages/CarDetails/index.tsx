import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';

import { GetAccessoryIcon } from '../../utils/getAccessoryIcon';

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
import { CarDTO } from '../../DTOS/CarDto';


interface Params {
  car: CarDTO
}

export function CarDetails() {
  const route = useRoute();

  const { car } = route.params as Params

  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {car})
  }

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider ImagesUrl={car.photos} />
      </CarImages>

      <Content>
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
      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}