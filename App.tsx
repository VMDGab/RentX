import React from 'react';

import AppLoading from 'expo-app-loading';

import { CarDetails } from './src/pages/CarDetails';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts,
   Inter_400Regular,
    Inter_500Medium,
  } from '@expo-google-fonts/inter'

import { 
  Archivo_400Regular, 
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'
import theme from './src/pages/styles/theme';


export default function App() {

  const [FontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular, 
    Archivo_500Medium,
    Archivo_600SemiBold,
  })

  if(!FontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
  <CarDetails/>
  </ThemeProvider>
  );
}

