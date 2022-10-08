import React, { FC } from 'react';
import { useIsUpSm } from 'services/hooks/use-get-screen-size';

interface Props {
  children: React.ReactNode;
}

export const ShowUpSm: FC<Props> = ({ children }) =>
  useIsUpSm() ? <>{children}</> : null;
