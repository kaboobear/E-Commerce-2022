import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const ResetPasswordSuccess = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography mb={2} variant="subtitle1">
        Password succesfully changed
      </Typography>
      <Typography mb={2} variant="body1" color="text.secondary">
        You can return to the catalog to continue shopping. We do our best to
        make you happy
      </Typography>
      <Link
        children={
          <Button variant="contained" color="primary" sx={{ height: 56 }}>
            Back Home
          </Button>
        }
        to="/"
      />
    </Box>
  );
};
