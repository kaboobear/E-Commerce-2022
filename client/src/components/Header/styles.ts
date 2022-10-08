import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const headerTitle: SxProps = {
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: 5,
};

export const headerButton: SxProps = {
  ml: [0, 1],
  minWidth: [40, 45],
  maxWidth: [40, 45],
  minHeight: [40, 45],
  maxHeight: [40, 45],
};

export const headerButtonIcon: SxProps = {
  color: 'text.primary',
};

export const headerButtonIconCustom: SxProps = {
  color: 'text.primary',
  width: 28,
  hieght: 28,
};

export const headerWrapper: SxProps<Theme> = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  py: 2,
  justifyContent: ['space-between'],
});
