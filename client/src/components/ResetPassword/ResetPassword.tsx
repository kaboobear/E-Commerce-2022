import React, { FC } from 'react';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { ResetPasswordSchema } from './schema';
import { resetPassword } from 'features/reset-password/reset-password.actions';
import { useSearchParams } from 'react-router-dom';
import { getErrorText } from 'services/utils/get-formik-error-text';
import { selectResetPasswordError } from 'features/reset-password/reset-password.selectors';

export const ResetPassword: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const error = useAppSelector(selectResetPasswordError);

  const initial: { password: string } = {
    password: '',
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Reset Password
      </Typography>
      <Box sx={{ mt: 1, width: 1 }}>
        <Formik
          initialValues={initial}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values) => {
            if (searchParams.get('token') && searchParams.get('id')) {
              //todo
              dispatch(
                resetPassword({
                  password: values.password,
                  token: searchParams.get('token') || '',
                  id: Number(searchParams.get('id')) || 0,
                }),
              );
            }
          }}
        >
          {(formik) => (
            <Form>
              {error && <Alert severity="error">{error.message}</Alert>}

              <TextField
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                helperText={getErrorText<{ password: string }>(
                  formik,
                  'password',
                )}
                {...formik.getFieldProps('password')}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 1 }}
              >
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
