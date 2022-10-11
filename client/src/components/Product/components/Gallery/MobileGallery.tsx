import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Box } from '@mui/material';
import React, { ComponentProps, FC } from 'react';
import { Image } from 'services/types/Image';
import Slider from 'react-slick';
import { MobileSlider } from './styled';

interface Props {
  images: Image[];
}

const mobileSliderProps: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: false,
  dots: true,
  cssEase: 'linear',
};

export const MobileGallery: FC<Props> = ({ images }) => (
  <MobileSlider {...mobileSliderProps}>
    {images.map((image) => (
      <Box
        key={image.id}
        component="img"
        src={image.url}
        sx={{ height: '500px' }}
      />
    ))}
  </MobileSlider>

  //todo: fix height
);
