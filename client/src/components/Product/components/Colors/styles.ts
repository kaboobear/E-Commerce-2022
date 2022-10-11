import { Theme, SxProps } from '@mui/material';

export const colorItemWrapper = (active: boolean): SxProps<Theme> => ({
  mr: 1,
  width: 46,
  height: 46,
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: (theme) =>
    `3px solid ${active ? theme.palette.primary.main : 'none'}`,
});

export const colorItem = (bgColor: string): SxProps<Theme> => ({
  width: 34,
  height: 34,
  backgroundColor: bgColor,
  borderRadius: 100,
});
