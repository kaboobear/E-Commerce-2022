import { FC } from "react";
import { Card, CardContent, Skeleton } from "@mui/material";

export const ProductSkeleton: FC = () => {
  return (
    <Card>
      <Skeleton height={350} width="100%" variant="rectangular" />
      <CardContent>
        <Skeleton height={32} width={120} sx={{ mb: 1 }} />
        <Skeleton height={60} width={250} sx={{ mb: 1.5 }} />
        <Skeleton height={42} width={100} sx={{ mb: 1.5 }} />
        <Skeleton height={42} width="100%" />
      </CardContent>
    </Card>
  );
};
