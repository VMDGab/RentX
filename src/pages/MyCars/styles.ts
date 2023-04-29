import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../DTOS/CarDto';
import { FlatList } from 'react-native';

export const Container = styled.View`
flex: 1;

`;

export const Header = styled.View`
justify-content: center;
padding: ${getStatusBarHeight()}px 24px; ;
 
width: 100%;
height: ${RFValue(325)}px;
background-color: ${({ theme }) => theme.colors.headers};
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(30)}px;
color: ${({ theme }) => theme.colors.shape};

margin-top: 24px;
`
export const Text = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_400};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.shape};

margin-top: 24px;
`
export const HeaderCars = styled.View`
flex: 1;
flex-direction: row;

padding: 24px;

width: 100%;

background-color: ${({ theme }) => theme.colors.background_primary};

justify-content: space-between;
`;

export const BodyText = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_400};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.text};


`
export const CarCount = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.title};


`
export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle:{
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})
`

`

export const RentalPeriod = styled.View`

flex-direction: row;

height: 40px;
width: 100%;

background-color: ${({ theme }) => theme.colors.background_secondary};

justify-content: space-between;
align-items: center;

margin-top: -10px;
margin-bottom: 20px;
padding: 0px 24px;
`;

export const PeriodTitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
font-size: ${RFValue(10)}px;
color: ${({ theme }) => theme.colors.text_detail};
text-transform: uppercase;


`
export const DateValue = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_400};
font-size: ${RFValue(13)}px;
color: ${({ theme }) => theme.colors.title};


`
export const DateInfo = styled.View`
width: 60%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;