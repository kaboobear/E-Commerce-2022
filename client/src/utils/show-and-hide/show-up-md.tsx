import React, { FC } from "react";
import { useIsUpMd } from "./hide-up-md";

interface Props {
  children: React.ReactNode;
}

export const ShowUpMd: FC<Props> = ({ children }) =>
  useIsUpMd() ? <>{children}</> : null;
