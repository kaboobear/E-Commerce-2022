import React, { FC, useEffect } from 'react';
import { Button, TextField, Grid, Box, Typography, Alert } from '@mui/material';
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
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box sx={{ mt: 1 }}>
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
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                helperText={getErrorText<LoginBody>(formik, 'email')}
                {...formik.getFieldProps('email')}
              />
              <TextField
                margin="normal"
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
                sx={{ mt: 2, mb: 2 }}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container>
          <Grid item xs>
            <Button onClick={openReset} variant="text" size="small">
              Forgot password?
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={openSignUp} variant="text" size="small">
              {"Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
