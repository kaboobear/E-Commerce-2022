import * as Yup from 'yup';

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password is too short')
    .max(64, 'Password is too long')
    .required('Password is required'),
});
