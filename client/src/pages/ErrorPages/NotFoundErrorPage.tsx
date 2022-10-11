import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { errorPage } from './styles';
import { Link } from 'react-router-dom';

export default function NotFoundErrorPage() {
  return (
    <Box sx={errorPage}>
      <Typography variant="h1" sx={{ lineHeight: '1', mb: 2 }}>
        404
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, mt: -1 }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link
        children={
          <Button variant="outlined" color="inherit">
            Back Home
          </Button>
        }
        to="/"
      />
    </Box>
  );
}
