import React from 'react';
import { 
    Container,
    Title,
 } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface props extends RectButtonProps {
    title: string,
   }

export function ConfirmButton({title, ...rest}: props) {
  return (
    <Container {...rest}>
        <Title>{title}</Title>
    </Container>
  );
}