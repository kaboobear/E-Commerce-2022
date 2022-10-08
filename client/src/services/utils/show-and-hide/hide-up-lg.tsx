import React, { FC } from 'react';
import { useIsUpLg } from 'services/hooks/use-get-screen-size';

interface Props {
  children: React.ReactNode;
}

export const HideUpLg: FC<Props> = ({ children }) => {
  const isUpLg = useIsUpLg();
  return isUpLg ? null : <>{children}</>;
};
