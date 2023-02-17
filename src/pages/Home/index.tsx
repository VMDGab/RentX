import React from 'react';

import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';
import { Car } from '../../components/Car';

export function Home() {
  const CarData = {
    brand: 'AUDI',
    name: 'R5 Coupé',
    rent: {
        period: 'Ao dia',
        price: '120',
    },
    thumbnail: 'https://i.pinimg.com/originals/cb/7e/3a/cb7e3a7103f1f6416ae37dbf6ec1bc56.png'
  }

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

        <TotalCars>
          Total de 12 carros
        </TotalCars>
      </HeaderContent>
    </Header>

    <CarList
    data={[1, 2, 3, 4, 5,]}
    renderItem={({item}) =>  <Car data={CarData}/>}
   
     />
    </Container >
  );
}
