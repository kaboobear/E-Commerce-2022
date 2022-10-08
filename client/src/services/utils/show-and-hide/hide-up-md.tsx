import React, { FC } from 'react';
import { useIsUpMd } from 'services/hooks/use-get-screen-size';

interface Props {
  children: React.ReactNode;
}

export const HideUpMd: FC<Props> = ({ children }) => {
  const isUpMd = useIsUpMd();
  return isUpMd ? null : <>{children}</>;
};
