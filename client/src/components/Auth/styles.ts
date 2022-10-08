import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const authWrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 1,
};

export const authModalAvatar: SxProps<Theme> = {
  bgcolor: 'primary.main',
  mb: 2,
  width: 60,
  height: 60,
};
