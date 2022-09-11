import { Box, Container } from "@mui/material";
import React from "react";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { Catalog } from "./components/Catalog/Catalog";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <Container maxWidth="lg" sx={{ pb: 2 }}>
      <Header />
      <Box py={1}>
        <CreateProduct />
      </Box>
      <Box py={1}>
        <Catalog />
      </Box>
    </Container>
  );
};
