import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, "Email is too short")
    .max(64, "Email is too long")
    .email("Valid Email is needed")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short")
    .max(64, "Password is too long")
    .required("Password is required"),
});
