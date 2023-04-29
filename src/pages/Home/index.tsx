import React, { useEffect, useState } from 'react';

import { StatusBar } from 'react-native'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../DTOS/CarDto';
import { api } from '../../services/api';
import { Load } from '../../components/Load';
import {Ionicons} from '@expo/vector-icons'

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton,
} from './styles';



export function Home() {

  const navigation = useNavigation();

  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setloading] = useState(true)
 
  const TotalCarsCount = cars.length
  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {car})
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
            Total de {TotalCarsCount} carros
          </TotalCars>
        </HeaderContent>
      </Header>

      {
        loading ? <Load /> :
          <CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}

          />
      }

      <MyCarsButton onPress={() => navigation.navigate('MyCars')}>
        <Ionicons name='ios-car-sport' size={32} color={theme.colors.shape}/>
      </MyCarsButton>
    </Container >
  );
}
