import React, { FC, useEffect } from 'react';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { RegisterBody } from 'api/auth/types';
import { Form, Formik } from 'formik';
import { RegisterSchema } from './schema';
import { register } from 'features/auth/auth.actions';
import { getErrorText } from 'services/utils/get-formik-error-text';
import { selectAuthError } from 'features/auth/auth.selectors';
import { resetError } from 'features/auth/auth.slice';

interface Props {}

export const SignUp: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const initial: RegisterBody = {
    username: '',
    email: '',
    password: '',
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Sign Up
      </Typography>
      <Box sx={{ width: 1 }}>
        <Formik
          initialValues={initial}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            dispatch(register(values));
          }}
        >
          {(formik) => (
            <Form>
              {error && <Alert severity="error">{error.message}</Alert>}

              <TextField
                fullWidth
                id="username"
                label="Username"
                helperText={getErrorText<RegisterBody>(formik, 'username')}
                {...formik.getFieldProps('username')}
              />
              <TextField
                fullWidth
                id="email"
                label="Email"
                helperText={getErrorText<RegisterBody>(formik, 'email')}
                {...formik.getFieldProps('email')}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                id="password"
                helperText={getErrorText<RegisterBody>(formik, 'password')}
                {...formik.getFieldProps('password')}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ height: 56 }}
                size="large"
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
