import React, { useRef, useState } from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';
import { FlatList, ViewToken } from 'react-native';

interface Props {
  ImagesUrl: string[]
}

interface ChangeImageProps{
  viewableItems: ViewToken[];
    changed: ViewToken[];
}
export function ImageSlider({ ImagesUrl }: Props) {

  const [imageIndex, setImageIndex] = useState(0)

const indexChanged = useRef((info: ChangeImageProps) => {
  const index = info.viewableItems[0].index!
  setImageIndex(index)
})

  return (
    <Container>
      <ImageIndexes>
        { ImagesUrl.map(( _ , index) => 
        <ImageIndex
        key={String(index)}
        active={index === imageIndex} 
        />
        )
     }
      </ImageIndexes>

    
        <FlatList 
        data={ImagesUrl}
        keyExtractor={key => key}
        renderItem={({item}) => (  
        <CarImageWrapper>
         <CarImage
          source={{ uri: item }}
          resizeMode='contain'
        /> 
        </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        />
        
      
    </Container>
  );
}