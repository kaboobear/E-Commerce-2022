import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const errorPage: SxProps<Theme> = (theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
});
