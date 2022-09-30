import React, { FC, useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "features/hooks";
import { ResetPasswordSchema } from "./schema";
import { resetPassword } from "features/reset-password/reset-password.actions";
import { useSearchParams } from "react-router-dom";
import { getErrorText } from "utils/get-formik-error-text";
import { reset as resetPasswordStateRefresh } from "features/reset-password/reset-password.slice";

import {
  selectResetPasswordError,
  selectResetPasswordStatus,
} from "features/reset-password/reset-password.selectors";
import { Status } from "types/Status";
import { ResetPasswordSuccess } from "./ResetPasswordSuccess";

export const ResetPassword: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [isResetPasswordSucces, setIsResetPasswordSuccess] = useState(false);
  const error = useAppSelector(selectResetPasswordError);
  const status = useAppSelector(selectResetPasswordStatus);

  useEffect(() => {
    dispatch(resetPasswordStateRefresh());
  }, [dispatch]);

  useEffect(() => {
    if (status === Status.SUCCESS) {
      setIsResetPasswordSuccess(true);
      dispatch(resetPasswordStateRefresh());
    }
  }, [status, dispatch]);

  const initial: { password: string } = {
    password: "",
  };

  if (isResetPasswordSucces) {
    return (
      <Container maxWidth="sm">
        <ResetPasswordSuccess />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h5">
        Reset Password
      </Typography>
      <Box sx={{ mt: 1, width: 1 }}>
        <Formik
          initialValues={initial}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values) => {
            if (searchParams.get("token") && searchParams.get("id")) {
              //todo
              dispatch(
                resetPassword({
                  password: values.password,
                  token: searchParams.get("token") || "",
                  id: Number(searchParams.get("id")) || 0,
                })
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
                  "password"
                )}
                {...formik.getFieldProps("password")}
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
    </Container>
  );
};
