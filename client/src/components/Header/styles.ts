import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const headerTitle: SxProps = {
  mr: 2,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
};

export const headerWrapper: SxProps<Theme> = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  py: 2,
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
});
