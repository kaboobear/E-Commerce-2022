import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const productCard: SxProps<Theme> = (theme) => ({
  height: 1,
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow .2s',
  '&:hover': {
    boxShadow: `0 0 7px ${theme.palette.divider}`,
  },
});

export const productCardContent: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};
