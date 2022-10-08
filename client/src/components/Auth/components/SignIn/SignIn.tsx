import React, { FC, useEffect } from 'react';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';
import { LoginBody } from 'api/auth/types';
import { Form, Formik } from 'formik';
import { login } from 'features/auth/auth.actions';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { LoginSchema } from './schema';
import { getErrorText } from 'services/utils/get-formik-error-text';
import { selectAuthError } from 'features/auth/auth.selectors';
import { resetError } from 'features/auth/auth.slice';

interface Props {
  openSignUp: () => void;
  openReset: () => void;
}

export const SignIn: FC<Props> = ({ openSignUp, openReset }) => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const initial: LoginBody = {
    email: '',
    password: '',
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Sign In
      </Typography>
      <Box sx={{ width: 1 }}>
        <Formik
          initialValues={initial}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            dispatch(login(values));
          }}
        >
          {(formik) => (
            <Form>
              {error && <Alert severity="error">{error.message}</Alert>}

              <TextField
                fullWidth
                id="email"
                label="Email"
                helperText={getErrorText<LoginBody>(formik, 'email')}
                {...formik.getFieldProps('email')}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                id="password"
                helperText={getErrorText<LoginBody>(formik, 'password')}
                {...formik.getFieldProps('password')}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mb: 2, height: 56 }}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={['column', 'column', 'row']}
        >
          <Button
            sx={{ mt: [1, 1, 0] }}
            onClick={openReset}
            variant="text"
            size="small"
          >
            Forgot password?
          </Button>
          <Button
            sx={{ order: [-1, -1, 0], mt: [1, 1, 0] }}
            onClick={openSignUp}
            variant="text"
            size="small"
          >
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Box>
    </>
  );
};
