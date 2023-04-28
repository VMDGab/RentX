import React from 'react';
import Gasoline from '../../assets/gasoline.svg'
import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage,
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CarDTO } from '../../DTOS/CarDto';

interface props extends RectButtonProps {
    data: CarDTO
  }

export function Car({data, ...rest}: props) {
    return (
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>


                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type>
                        <Gasoline />
                    </Type>
                </About>

            </Details>

            <CarImage 
            resizeMode='contain'
            source={{ uri: data.thumbnail }} 
            />
        </Container>
    );
}