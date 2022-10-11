import { Theme, SxProps } from '@mui/material';

export const galleryWrapper: SxProps<Theme> = (theme) => ({
  width: [1, 550, 400, 450],

  textAlign: 'center',
});

export const gallery: SxProps<Theme> = (theme) => ({
  mr: [-2.5, 'auto', 3, 5],
  ml: [-2.5, 'auto', 0],
  mb: [5, 3, 0],
});
