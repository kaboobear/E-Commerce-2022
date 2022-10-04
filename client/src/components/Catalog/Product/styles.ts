import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const productCard: SxProps = {
  height: 1,
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow .2s',
  //todo:
  '&:hover': {
    boxShadow: '0 0 11px rgba(33,33,33,.2)',
  },
};

export const productCardContent: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};
