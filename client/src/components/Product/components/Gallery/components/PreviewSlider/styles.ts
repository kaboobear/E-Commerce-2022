import { Theme, SxProps } from '@mui/material';

export const galleryIcon: SxProps<Theme> = {
  color: ({ palette }) => palette.text.primary,
};

export const galleryIconButton: SxProps<Theme> = (theme) => ({
  '&.slick-arrow': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 40,
    height: 40,
    backgroundColor: 'common.white',
    border: `1px solid ${theme.palette.divider}`,
    transition: '.2s',
    '&:hover': {
      border: `1px solid ${theme.palette.text.disabled}`,
    },
    '&.slick-prev': {
      left: -50,
    },
    '&.slick-next': {
      right: -50,
    },
  },
});
