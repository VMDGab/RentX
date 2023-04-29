import React, { useState, useEffect } from 'react';

import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import theme from '../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../DTOS/CarDto';
import { api } from '../../services/api';
import { Car } from '../../components/Car';
import { AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

import {
    Container,
    Header,
    Title,
    Text,
    HeaderCars,
    BodyText,
    CarCount,
    CarList,
    Content,
    RentalPeriod,
    PeriodTitle,
    DateValue,
    DateInfo,
} from './styles';
import { Load } from '../../components/Load';


interface CarProps {
    id: string,
    user_id: string,
    car: CarDTO,
}

export function MyCars() {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack()
    }


    const [cars, setCars] = useState<CarProps>([])
    const [loading, setloading] = useState(true)
    const countCars = cars.length
    useEffect(() => {

        async function fetchCars() {
            try {
                const response = await api.get('/schedules_byuser?user_id=1');
                console.log(response)
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
            <Header>
                <StatusBar
                    barStyle={'light-content'}
                    translucent
                    backgroundColor='transparent' />

                <BackButton color={theme.colors.shape} onPress={handleGoBack} />

                <Title>
                    Seus agendamentos,{'\n'}
                    estão aqui.
                </Title>

                <Text>Conforto, segurança e praticidade.</Text>
            </Header>

            <Content>
                <HeaderCars>
                    <BodyText>Agendamentos feitos</BodyText>
                    <CarCount>{countCars}</CarCount>
                </HeaderCars>

                {
                    loading ? <Load /> :
                        <CarList
                            data={cars}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => 
                            <>
                            <Car data={item.car} /> 
                            <RentalPeriod>
                                <PeriodTitle>Período</PeriodTitle>
                                <DateInfo>
                                <DateValue>{item.startDate}</DateValue>
                                <AntDesign name='arrowright' size={RFValue(15)} color={theme.colors.title} style={{marginHorizontal:10}}/>
                                <DateValue>{item.endDate}</DateValue>
                                </DateInfo>
                            </RentalPeriod>
                            </>
                        }
                        />
                }
            </Content>
        </Container>
    );
}