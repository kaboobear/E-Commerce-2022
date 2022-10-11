import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const productNotFound: SxProps<Theme> = (theme) => ({
  pt: 5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});
