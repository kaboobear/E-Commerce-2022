import React, { useEffect } from "react";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { Catalog } from "./components/Catalog/Catalog";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "components/ErrorPages/NotFoundPage";
import { MainLayout } from "layouts/MainLayout";
import { useAppDispatch } from "features/hooks";
import { init } from "features/auth/auth.actions";
import { ResetPassword } from "components/Auth/components/ResetPassword/ResetPassword";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/passwordReset" element={<ResetPassword />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
