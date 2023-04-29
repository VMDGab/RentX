import React from 'react';
 
import {Feather} from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { ptBr } from './localeConfig';

import { generateInterval } from './generateInterval';


import {
Calendar as CustonCalendar,
LocaleConfig,
CalendarProps,
 } from 'react-native-calendars'

LocaleConfig.locales['pt-br'] =  ptBr
LocaleConfig.defaultLocale = 'pt-br'

interface MarkedDatesProps{
    [date: string] : {
    color: string;
    textColor:string;
    disable?: boolean;
    disableTouchEvent?: boolean;
}
}

interface DayProps {
dateString: string;
day: number;
month: string;
year: number;
timestamp: number;

}

function Calendar({markedDates, onDayPress} : CalendarProps) {

    const theme = useTheme();

  return (
           <CustonCalendar 
           renderArrow={(direction) => 
            <Feather size={24} color={theme.colors.text}
            name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
            />
        }
        
        headerStyle={{
            backgroundColor: theme.colors.background_secondary,
            borderBottomColor: theme.colors.text_detail,
            borderBottomWidth: 0.5,
            paddingBottom: 10,
            marginBottom:10,
        }}

        theme={{
            textDayFontFamily: theme.fonts.primary_400,
            textDayHeaderFontFamily: theme.fonts.primary_500,
            textDayHeaderFontSize:10,
            textMonthFontFamily:theme.fonts.secondary_600,
            textMonthFontSize:20,
            monthTextColor: theme.colors.title,
            arrowStyle:{
                marginHorizontal: -15,
            }
        }}
        firstDay={1}
        minDate={new Date()}
        markingType='period'
        markedDates={markedDates}
        onDayPress={onDayPress}
        />
        
        
     );
}
export {
    Calendar,
    MarkedDatesProps,
    DayProps,
    generateInterval,
}