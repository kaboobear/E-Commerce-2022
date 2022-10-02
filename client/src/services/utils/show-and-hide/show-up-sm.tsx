import React, { FC } from 'react';
import { useIsUpSm } from './hide-up-sm';

interface Props {
  children: React.ReactNode;
}

export const ShowUpSm: FC<Props> = ({ children }) =>
  useIsUpSm() ? <>{children}</> : null;
