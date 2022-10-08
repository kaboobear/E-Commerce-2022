import { SxProps } from '@mui/system';
import { CSSProperties } from 'react';

export const productCard: SxProps = {
  height: 1,
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow .2s',
  '&:hover': {
    boxShadow: '0 0 7px rgba(33,33,33,.4)',
  },
};

export const productCardContent: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

export const imageFade: CSSProperties = {
  transitionDelay: '300ms',
  transitionDuration: '500ms',
};
