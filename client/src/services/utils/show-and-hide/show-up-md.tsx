import React, { FC } from 'react';
import { useIsUpMd } from 'services/hooks/use-get-screen-size';

interface Props {
  children: React.ReactNode;
}

export const ShowUpMd: FC<Props> = ({ children }) =>
  useIsUpMd() ? <>{children}</> : null;
