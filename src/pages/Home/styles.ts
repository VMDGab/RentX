import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../DTOS/CarDto';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
width: 100%;
height:113px;

background-color: ${({theme}) => theme.colors.headers};

padding: 32px 24px;

justify-content: flex-end;
`
export const TotalCars = styled.Text`
font-size: ${RFValue(15)}px ;
color: ${({theme}) => theme.colors.text};
font-family:  ${({theme}) => theme.fonts.primary_400};
`
export const HeaderContent = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-between;
`

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle:{
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``

