import { Theme, SxProps } from '@mui/material';

export const mainGalleryItem: SxProps<Theme> = (theme) => ({
  height: [0, 550, 400, 450],
  width: [0, 550, 400, 450],
  borderRadius: 2,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
});

export const previewSliderWrapper: SxProps<Theme> = (theme) => ({
  display: 'inline-block',
  width: [0, 450, 300, 350],
  '& .slick-arrow:before': {
    content: 'none',
  },
  '& .slick-prev': {
    left: '-40px',
  },
});

export const previewItem =
  (active: boolean): SxProps<Theme> =>
  (theme) => ({
    width: [0, 100, 55, 70],
    height: [0, 100, 55, 70],
    borderRadius: 1.5,
    cursor: 'pointer',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    ...(active && {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      opacity: 1,
    }),
  });
