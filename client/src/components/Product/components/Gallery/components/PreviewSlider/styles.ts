import { Theme, SxProps } from '@mui/material';

export const galleryIcon: SxProps<Theme> = {
  color: ({ palette }) => palette.secondary.main,
};

export const galleryIconButton: SxProps = {
  transform: 'translate(0, -35%)',
};
