import React, { FC } from 'react';
import { useIsUpLg } from 'services/hooks/use-get-screen-size';

interface Props {
  children: React.ReactNode;
}

export const ShowUpLg: FC<Props> = ({ children }) =>
  useIsUpLg() ? <>{children}</> : null;
