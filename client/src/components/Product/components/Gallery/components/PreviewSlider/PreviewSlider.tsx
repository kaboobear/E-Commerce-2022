import { Box } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { ComponentProps, forwardRef } from 'react';
import Slider from 'react-slick';
import { galleryIcon } from './styles';
import { SliderControl } from './SliderControl';

const previewSliderProps: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToScroll: 1,
  slidesToShow: 3,
  cssEase: 'linear',
  centerMode: true,
  focusOnSelect: true,
  arrows: true,
  infinite: true,
  prevArrow: (
    <SliderControl>
      <KeyboardArrowLeftIcon sx={galleryIcon} fontSize="small" />
    </SliderControl>
  ),
  nextArrow: (
    <SliderControl>
      <KeyboardArrowRightIcon sx={galleryIcon} fontSize="small" />
    </SliderControl>
  ),
};

export const PreviewSlider = forwardRef<Slider, ComponentProps<typeof Slider>>(
  ({ children, ...sliderProps }, ref) => (
    <Slider {...previewSliderProps} {...sliderProps} ref={ref}>
      {children}
    </Slider>
  ),
);
