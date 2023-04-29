import React, { useState } from 'react';

import { BackButton } from '../../components/BackButton';
import theme from '../styles/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import ArrowSvg from '../../assets/arrow.svg';
import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDatesProps, generateInterval } from '../../components/Calendar';
import { format } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../DTOS/CarDto';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';
import { Alert, StatusBar } from 'react-native';



interface RentalPeriod {
     startFormatted: string,
     endFormatted: string,
}

interface Params {
    car: CarDTO
  }

export function Scheduling() {

    const route = useRoute();

    const { car } = route.params as Params
    const navigation = useNavigation();

    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
    const [lastSelectedDate, setlastSelectedDate] = useState<DayProps>({} as DayProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    function handleConfirmRental() {
             navigation.navigate('SchedulingDetails', {
                car,
                dates: Object.keys(markedDates)
            })
           }
    function handleGoBack() {
        navigation.goBack()
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start
        }

        setlastSelectedDate(end);

        const interval = generateInterval(start, end);
        setMarkedDates(interval)

        const firstDate = Object.keys(interval)[0];
        const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlataformDate(new Date(lastDate)), 'dd/MM/yyyy'),
        })
    }
    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle={'light-content'}
                    translucent
                    backgroundColor='transparent' />

                <BackButton color={theme.colors.shape} onPress={handleGoBack} />

                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
                    </DateInfo>

                </RentalPeriod>

            </Header>

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate} />
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={handleConfirmRental} enabled={!!rentalPeriod.startFormatted}/>
            </Footer>
        </Container>
    );
}