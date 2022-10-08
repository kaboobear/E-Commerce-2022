import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const filterSortSectionWrapper: SxProps<Theme> = {
  display: 'flex',
  borderTop: (theme) => `1px solid ${theme.palette.divider}`,
  borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
  mb: 3,
  mx: [-2.5, -2.5, -3],
};

export const filterWrapper: SxProps = {
  width: [290, 290, 290, 240],
  maxWidth: '100%',
  mr: [2, 2, 2, 4],
  ml: [2, 2, 2, 0],
};

export const filterTitle: SxProps = {
  height: [50, 50, 50, 60],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
};

export const sectionVerticalDivider: SxProps = {
  alignSelf: 'stretch',
  height: 'auto',
};

export const filterButtonContent: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  color: (theme) => theme.palette.text.primary,
};

export const filterSortSectionButton: SxProps = {
  width: 1,
  height: 1,
  textTransform: 'none',
  p: 0,
  '&:hover': {
    backgroundColor: 'rgba(100, 149, 237, 0.1)',
  },
};
