import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const backButton: SxProps<Theme> = {
  position: 'absolute',
  left: (theme) => theme.spacing(1),
  top: (theme) => theme.spacing(1),
};

export const closeButton: SxProps<Theme> = {
  position: 'absolute',
  right: (theme) => theme.spacing(1),
  top: (theme) => theme.spacing(1),
};
