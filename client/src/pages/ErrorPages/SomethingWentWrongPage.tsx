import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { errorPage } from './styles';

export default function SomethingWentWrongPage() {
  return (
    <Box sx={errorPage}>
      <Typography variant="h4" sx={{ lineHieght: '1', mb: 2 }}>
        Oops, something went wrong
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, mt: -1 }}>
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
