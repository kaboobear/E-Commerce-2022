import { styled } from '@mui/material';
import Slider from 'react-slick';

export const MobileSlider = styled(Slider)(({ theme }) => ({
  '& .slick-dots': {
    bottom: -25,

    '& li': {
      width: 8,
      height: 8,
      margin: '0 8px',
      borderRadius: 4,
      background: theme.palette.divider,

      '& button': {
        width: 12,
        height: 6,

        '&:before': {
          content: 'none',
        },
      },
      '&.slick-active': {
        background: theme.palette.primary.main,
      },
    },
  },
}));
