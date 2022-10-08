import { Typography, Box } from '@mui/material';
import React from 'react';

export const ResetPasswordEmailSent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Email Sent
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3, width: 0.8 }}
      >
        Check you email to get instructions for your password resetting. We do
        our best to make you happy
      </Typography>
    </Box>
  );
};
