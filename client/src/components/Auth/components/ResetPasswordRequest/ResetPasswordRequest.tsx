import React, { FC, useEffect } from 'react';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { ResetPasswordRequestBody } from 'api/auth/types';
import { ResetPasswordRequestSchema } from './schema';
import { resetPasswordRequest } from 'features/reset-password/reset-password.actions';
import { getErrorText } from 'services/utils/get-formik-error-text';
import { reset as resetPasswordStateRefresh } from 'features/reset-password/reset-password.slice';
import {
  selectResetPasswordError,
  selectResetPasswordStatus,
} from 'features/reset-password/reset-password.selectors';
import { Status } from 'services/types/Status';

interface Props {
  openResetSuccess: () => void;
}

export const ResetPasswordRequest: FC<Props> = ({ openResetSuccess }) => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectResetPasswordError);
  const status = useAppSelector(selectResetPasswordStatus);

  useEffect(() => {
    dispatch(resetPasswordStateRefresh());
  }, [dispatch]);

  useEffect(() => {
    if (status === Status.SUCCESS) {
      openResetSuccess();
      dispatch(resetPasswordStateRefresh());
    }
  }, [status, openResetSuccess, dispatch]);

  const initial: ResetPasswordRequestBody = {
    email: 'kaboo.bear@gmail.com',
  };
  return (
    <>
      <Typography component="h1" variant="h5">
        Reset Password
      </Typography>
      <Box sx={{ mt: 1, width: 1 }}>
        <Formik
          initialValues={initial}
          validationSchema={ResetPasswordRequestSchema}
          onSubmit={(values) => {
            dispatch(resetPasswordRequest(values));
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
                helperText={getErrorText<ResetPasswordRequestBody>(
                  formik,
                  'email',
                )}
                {...formik.getFieldProps('email')}
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
