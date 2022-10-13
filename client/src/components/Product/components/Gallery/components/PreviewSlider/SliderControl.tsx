import { CustomArrowProps } from 'react-slick';
import React, { FC, PropsWithChildren } from 'react';
import { Box, IconButton } from '@mui/material';
import { galleryIconButton } from './styles';

type ControlProps = PropsWithChildren<CustomArrowProps>;

export const SliderControl: FC<ControlProps> = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: ControlProps) => (
  <IconButton sx={galleryIconButton} {...props}>
    {children}
  </IconButton>
);
