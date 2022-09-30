import { FormikProps } from "formik";

export function getErrorText<T>(
  formikObject: FormikProps<T>,
  fieldName: keyof T
) {
  if (formikObject.errors[fieldName] && formikObject.touched[fieldName]) {
    return formikObject.errors[fieldName];
  }
  return null;
}
