import React, { FC, useEffect } from "react";
import { Button, TextField, Box, Typography, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "features/hooks";
import { RegisterBody } from "api/auth/types";
import { Form, Formik } from "formik";
import { RegisterSchema } from "./schema";
import { register } from "features/auth/auth.actions";
import { getErrorText } from "utils/get-formik-error-text";
import { selectAuthError } from "features/auth/auth.selectors";
import { resetError } from "features/auth/auth.slice";

interface Props {}

export const SignUp: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const initial: RegisterBody = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box sx={{ mt: 1 }}>
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
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                helperText={getErrorText<RegisterBody>(formik, "username")}
                {...formik.getFieldProps("username")}
              />
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                helperText={getErrorText<RegisterBody>(formik, "email")}
                {...formik.getFieldProps("email")}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                id="password"
                helperText={getErrorText<RegisterBody>(formik, "password")}
                {...formik.getFieldProps("password")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
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
