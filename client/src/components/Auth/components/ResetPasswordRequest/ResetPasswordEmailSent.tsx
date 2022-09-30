import { Typography, Box } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const ResetPasswordEmailSent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography component="h1" variant="h5">
        Email Sent
      </Typography>
      <Typography mt={2} width={0.8}>
        Check you email to get instructions for your password resetting. We do
        our best to make you happy
      </Typography>
      <MailOutlineIcon sx={{ fontSize: 70 }} />
    </Box>
  );
};
