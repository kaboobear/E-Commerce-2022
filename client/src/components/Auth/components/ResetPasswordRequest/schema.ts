import * as Yup from 'yup';

export const ResetPasswordRequestSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, 'Email is too short')
    .max(64, 'Email is too long')
    .email('Valid Email is needed')
    .required('Email is required'),
});
