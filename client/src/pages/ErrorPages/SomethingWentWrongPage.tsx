import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { errorPage } from './styles';

export default function SomethingWentWrongPage() {
  return (
    <Box sx={errorPage}>
      <Typography variant="h2">Oops, something went wrong</Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Please, refresh your page, or try later
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => window.location.reload()}
      >
        Refresh
      </Button>
    </Box>
  );
}
