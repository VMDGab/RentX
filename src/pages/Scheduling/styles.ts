import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface DateValueProps{
    selected: boolean;
}

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background_secondary};

`;

export const Header = styled.View`
justify-content: center;
padding: ${getStatusBarHeight()}px 24px 24px ;
 
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

export const RentalPeriod = styled.View`

width: 100%;

flex-direction: row;
justify-content: space-between;
align-items: center;

margin-top: 32px;
`;

export const DateInfo = styled.View`
width: 30%;
`;

export const DateTitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
font-size: ${RFValue(10)}px;
color: ${({ theme }) => theme.colors.text};
`
export const DateValue = styled.Text<DateValueProps>`
font-family: ${({ theme }) => theme.fonts.primary_500};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.shape};

${({selected, theme}) => !selected && css`

border-bottom-width: 1px ;
border-bottom-color:${({ theme }) => theme.colors.text};
padding-bottom: 5px ;

`}
`;

export const Footer = styled.View`
width: 100%;
background-color: ${({theme}) => theme.colors.background_secondary} ;
padding: 24px 24px ${getBottomSpace() + 24}px;
`
export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
      padding: 24,
      alignItens: 'center'
    },
    showsVerticalScrollIndicator: false
  })`


`
