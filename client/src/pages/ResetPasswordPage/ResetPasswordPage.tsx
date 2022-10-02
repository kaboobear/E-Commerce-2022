import React, { FC, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { reset as resetPasswordStateRefresh } from 'features/reset-password/reset-password.slice';

import { selectResetPasswordStatus } from 'features/reset-password/reset-password.selectors';
import { Status } from 'services/types/Status';
import { ResetPassword } from 'components/ResetPassword/ResetPassword';
import { ResetPasswordSuccess } from 'components/ResetPassword/ResetPasswordSuccess';

export const ResetPasswordPage: FC = () => {
  const dispatch = useAppDispatch();
  const [isResetPasswordSuccess, setIsResetPasswordSuccess] = useState(false);
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

  return (
    <Container maxWidth="sm">
      {isResetPasswordSuccess ? <ResetPasswordSuccess /> : <ResetPassword />}
    </Container>
  );
};
