import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { 
  Container,
  Header,
  CarImages,

 } from './styles';


export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton/>
      </Header>

      <CarImages>
      <ImageSlider ImagesUrl={['https://i.pinimg.com/originals/cb/7e/3a/cb7e3a7103f1f6416ae37dbf6ec1bc56.png']}/>
      </CarImages>
      
    </Container>
  );
}