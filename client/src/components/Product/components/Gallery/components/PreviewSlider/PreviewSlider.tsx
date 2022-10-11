import { IconButton, Box } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { ComponentProps, forwardRef } from 'react';
import Slider from 'react-slick';
import { galleryIcon, galleryIconButton } from './styles';

const previewSliderProps: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToScroll: 1,
  slidesToShow: 3,
  cssEase: 'linear',
  centerMode: true,
  focusOnSelect: true,
  arrows: true,
  infinite: true,
};

export const PreviewSlider = forwardRef<Slider, ComponentProps<typeof Slider>>(
  ({ children, ...sliderProps }, ref) => (
    <Slider
      {...previewSliderProps}
      {...sliderProps}
      ref={ref}
      nextArrow={
        <Box>
          <IconButton sx={galleryIconButton} aria-label="gallery next slick">
            <KeyboardArrowRightIcon sx={galleryIcon} fontSize="small" />
          </IconButton>
        </Box>
      }
      prevArrow={
        <Box>
          <IconButton sx={galleryIconButton} aria-label="gallery prev slick">
            <KeyboardArrowLeftIcon sx={galleryIcon} fontSize="small" />
          </IconButton>
        </Box>
      }
    >
      {children}
    </Slider>
  ),
);
