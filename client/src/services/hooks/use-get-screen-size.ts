import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const useIsUpLg = (): boolean =>
  useMediaQuery(useTheme().breakpoints.up('lg'));

export const useIsUpSm = (): boolean =>
  useMediaQuery(useTheme().breakpoints.up('sm'));

export const useIsUpMd = (): boolean =>
  useMediaQuery(useTheme().breakpoints.up('md'));
