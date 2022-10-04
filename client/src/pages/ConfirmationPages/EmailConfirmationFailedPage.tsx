import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export const EmailConfirmationFailedPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <CloseIcon sx={{ fontSize: 70, mb: 3 }} />
      <Typography mb={2} component="h1" variant="h5">
        Email Confirmation Failed
      </Typography>
      <Typography mb={2}>
        Maybe something wrong with your confirmation link. We do our best to
        make you happy
      </Typography>
      <Link
        children={
          <Button variant="contained" color="primary">
            Back Home
          </Button>
        }
        to="/"
      />
    </Box>
  );
};
