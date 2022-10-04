import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from 'layouts/MainLayout';
import { EmailConfirmationPage } from 'pages/ConfirmationPages/EmailConfirmationPage';
import { ErrorBoundaries } from 'services/wrappers/ErrorBoundaries';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { CreateProduct } from 'components/CreateProduct/CreateProduct';
import { ResetPasswordPage } from 'pages/ResetPasswordPage/ResetPasswordPage';
import NotFoundErrorPage from 'pages/ErrorPages/NotFoundErrorPage';
import { useAppDispatch } from 'features/hooks';
import { init } from 'features/auth/auth.actions';
import { EmailConfirmationFailedPage } from 'pages/ConfirmationPages/EmailConfirmationFailedPage';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <ErrorBoundaries>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/password-reset" element={<ResetPasswordPage />} />
          <Route path="/email-confirmed" element={<EmailConfirmationPage />} />
          <Route
            path="/email-confirmation-failed"
            element={<EmailConfirmationFailedPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </ErrorBoundaries>
  );
};
