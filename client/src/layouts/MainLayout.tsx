import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Box, Container } from '@mui/material';

export const MainLayout: FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ pt: 1, pb: 5 }}>
        <Outlet />
      </Box>
    </Container>
  );
};
