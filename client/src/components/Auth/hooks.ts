import { setMode } from 'features/auth/auth.slice';
import { useAppDispatch } from 'features/hooks';
import { AuthSubpage } from 'services/enums/auth-subpage.enums';

interface changeAuthSubpageActions {
  close: () => void;
  openLogin: () => void;
  openRegister: () => void;
  openResetPassword: () => void;
  openResetPasswordSuccess: () => void;
}

export const useChangeAuthSubpage = (): changeAuthSubpageActions => {
  const dispatch = useAppDispatch();
  return {
    close: () => dispatch(setMode(AuthSubpage.None)),
    openLogin: () => dispatch(setMode(AuthSubpage.Login)),
    openRegister: () => dispatch(setMode(AuthSubpage.Register)),
    openResetPassword: () => dispatch(setMode(AuthSubpage.ResetPassword)),
    openResetPasswordSuccess: () =>
      dispatch(setMode(AuthSubpage.ResetPasswordSuccess)),
  };
};
