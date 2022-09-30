import { Typography, Box, Button } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

export const ResetPasswordSuccess = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <CheckCircleOutlineIcon sx={{ fontSize: 70, mb: 3 }} />
      <Typography mb={2} component="h1" variant="h5">
        Password succesfully changed
      </Typography>
      <Typography mb={2}>
        You can return to the catalog to continue shopping. We do our best to
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
