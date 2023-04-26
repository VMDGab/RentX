import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  ImagesUrl: string[]
}

export function ImageSlider({ ImagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{ uri: ImagesUrl[0] }}
          resizeMode='contain'
        />
      </CarImageWrapper>
    </Container>
  );
}