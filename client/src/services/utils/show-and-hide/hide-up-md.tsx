import { useTheme } from '@mui/material/styles';
import React, { FC } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  children: React.ReactNode;
}

export const useIsUpMd = (): boolean =>
  useMediaQuery(useTheme().breakpoints.up('md'));

export const HideUpMd: FC<Props> = ({ children }) => {
  const isUpMd = useIsUpMd();
  return isUpMd ? null : <>{children}</>;
};
