import { FC } from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

export const ProductItemSkeleton: FC = () => {
  return (
    <Card>
      <Skeleton
        sx={{ height: [400, 340, 320, 275] }}
        width="100%"
        variant="rectangular"
      />
      <CardContent sx={{ width: 1 }}>
        <Skeleton height={32} width="60%" sx={{ mb: 1 }} />
        <Skeleton height={72} width="100%" sx={{ mb: 1.5 }} />
        <Skeleton height={42} width="80%" sx={{ mb: 1.5 }} />
      </CardContent>
    </Card>
  );
};
