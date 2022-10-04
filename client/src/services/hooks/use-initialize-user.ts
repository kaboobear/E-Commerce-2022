import { useEffect } from 'react';
import { init } from 'features/auth/auth.actions';
import { checkIsInit, selectUser } from 'features/auth/auth.selectors';
import { useAppDispatch, useAppSelector } from 'features/hooks';

export const useInitializeUser = (): {
  isAuth: boolean;
  isUserLoading: boolean;
} => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isUserLoading = useAppSelector(checkIsInit);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return {
    isAuth: Boolean(user),
    isUserLoading,
  };
};
