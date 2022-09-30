import { useTheme } from "@mui/material/styles";
import React, { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  children: React.ReactNode;
}

export const useIsUpSm = (): boolean =>
  useMediaQuery(useTheme().breakpoints.up("sm"));

export const HideUpSm: FC<Props> = ({ children }) =>
  useIsUpSm() ? null : <>{children}</>;
