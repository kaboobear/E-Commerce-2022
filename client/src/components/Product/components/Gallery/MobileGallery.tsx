import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Box } from '@mui/material';
import React, { ComponentProps, FC } from 'react';
import { ImageType } from 'services/types/Image';
import Slider from 'react-slick';
import { MobileSlider } from './styled';
import { Image } from 'components/Common/Image/Image';

interface Props {
  images: ImageType[];
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
      <Image
        transition
        key={image.id}
        src={image.url}
        sx={{ height: '500px' }}
        alt={String(image.id)}
      />
    ))}
  </MobileSlider>
);
