import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const EmailConfirmationFailedPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography mb={2} variant="subtitle1">
        Email Confirmation Failed
      </Typography>
      <Typography mb={2} variant="body1" color="text.secondary">
        Maybe something wrong with your confirmation link. We do our best to
        make you happy
      </Typography>
      <Link
        children={
          <Button variant="contained" sx={{ height: 56 }} color="primary">
            Back Home
          </Button>
        }
        to="/"
      />
    </Box>
  );
};
