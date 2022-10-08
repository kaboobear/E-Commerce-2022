import React, { FC } from 'react';
import { useIsUpSm } from 'services/hooks/use-get-screen-size';

interface Props {
  children: React.ReactNode;
}

export const HideUpSm: FC<Props> = ({ children }) =>
  useIsUpSm() ? null : <>{children}</>;
