import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../styles/theme';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { GetAccessoryIcon } from '../../utils/getAccessoryIcon';

import { format } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlatformDate';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../DTOS/CarDto';

import { api } from '../../services/api';
import { Alert } from 'react-native';


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


interface Params {
  car: CarDTO,
  dates: string[]
}

interface RentalPeriod {
  start: string,
  end: string,
}

export function SchedulingDetails() {

  const navigation = useNavigation()
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const route = useRoute();

  const { car, dates } = route.params as Params
  const [loading, setloading] = useState(false)

  const rentTotal = Number(dates.length * car.rent.price)
  async function handleConfirmRental() {

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

   await api.post('/schedules_byuser', {
    car,
    user_id: 1,
    startDate: rentalPeriod.start,
    endDate: rentalPeriod.end,
    })

    setloading(true)

    api.put(`/schedules_bycars/${car.id}`,{
      id: car.id,
      unavailable_dates
    }).then( response => navigation.navigate('Confirmation', {
      title: 'Carro alugado!',
      message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`,
      nextScreenRoute: 'Home',
    }))
    .catch(() => {
    Alert.alert('Erro ao agendar.', 'Não foi possivel confirmar o agendamento do carro.')
    setloading(false)
    }
    )
   
  }

  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, [])
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
          {car.accessories.map(acessory => (
            <Accessory key={acessory.type} icon={GetAccessoryIcon(acessory.type)} name={acessory.name} />
          ))}
        </Accessories>

        <RentalPeriod>

          <CalendarIcon>
            <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>

            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>

          </DateInfo>

          <Feather name='chevron-right' size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>

            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>

          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ {car.rent.price} x{dates.length} diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
        title='Alugar agora' 
        color={theme.colors.success}
        onPress={handleConfirmRental}
        enabled={!loading}
        loading={loading}
         />
      </Footer>
    </Container>
  );
}