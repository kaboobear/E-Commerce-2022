import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from 'layouts/MainLayout';
import { EmailConfirmationPage } from 'pages/ConfirmationPages/EmailConfirmationPage';
import { ErrorBoundaries } from 'services/wrappers/ErrorBoundaries';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { CreateProduct } from 'components/CreateProduct/CreateProduct';
import { ResetPasswordPage } from 'pages/ResetPasswordPage/ResetPasswordPage';
import NotFoundErrorPage from 'pages/ErrorPages/NotFoundErrorPage';
import { EmailConfirmationFailedPage } from 'pages/ConfirmationPages/EmailConfirmationFailedPage';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';
import ProtectedRoute from './ProtectedRoute';
import { useInitializeUser } from 'services/hooks/use-initialize-user';

export const MainPage = () => {
  const { isAuth, isUserLoading } = useInitializeUser();
  if (isUserLoading) return null;

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
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAuthenticated={isAuth}
                authenticationPath="/"
                outlet={<ProfilePage />}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </ErrorBoundaries>
  );
};
