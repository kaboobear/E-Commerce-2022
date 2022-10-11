import React, { ComponentProps, forwardRef } from 'react';
import Slider from 'react-slick';

const mainSliderProps: ComponentProps<typeof Slider> = {
  speed: 0,
  slidesToScroll: 1,
  slidesToShow: 1,
  cssEase: 'linear',
};

export const MainSlider = forwardRef<Slider, ComponentProps<typeof Slider>>(
  ({ children, ...sliderProps }, ref) => (
    <Slider {...mainSliderProps} {...sliderProps} ref={ref}>
      {children}
    </Slider>
  ),
);
