import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { notFoundPage } from "./styles";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box sx={notFoundPage}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
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
