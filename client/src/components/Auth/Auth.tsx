import { Avatar, Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { SignIn } from './components/SignIn/SignIn';
import PersonIcon from '@mui/icons-material/Person';
import { SignUp } from './components/SignUp/SignUp';
import { ResetPasswordRequest } from './components/ResetPasswordRequest/ResetPasswordRequest';
import { Dialog } from 'components/Common/Dialog/Dialog';
import { authModalAvatar, authWrapper } from './styles';
import { AuthSubpage } from 'services/enums/auth-subpage.enums';
import { ResetPasswordEmailSent } from './components/ResetPasswordRequest/ResetPasswordEmailSent';
import { useAppSelector } from 'features/hooks';
import { selectMode } from 'features/auth/auth.selectors';
import { useChangeAuthSubpage } from './hooks';

export const Auth: FC<PropsWithChildren> = ({ children }) => {
  const authSubpage = useAppSelector(selectMode);
  const authSubpageActions = useChangeAuthSubpage();

  const handleOpen = () => {
    authSubpageActions.openLogin();
  };

  const handleClose = () => {
    authSubpageActions.close();
  };

  const isOpen = authSubpage !== AuthSubpage.None;
  const isLogin = authSubpage === AuthSubpage.Login;
  const isRegister = authSubpage === AuthSubpage.Register;
  const isResetPassword = authSubpage === AuthSubpage.ResetPassword;
  const isResetSuccess = authSubpage === AuthSubpage.ResetPasswordSuccess;

  return (
    <>
      <Box onClick={handleOpen}>{children}</Box>

      <Dialog
        handleClose={handleClose}
        open={isOpen}
        paperSx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            margin: 0,
            minWidth: '100vw',
            minHeight: '100vh',
            borderRadius: 0,
          },
        })}
        backButton={{
          exists: isRegister || isResetPassword || isResetSuccess,
          onClick: () => authSubpageActions.openLogin(),
        }}
      >
        {isOpen && (
          <Box sx={authWrapper}>
            <Avatar sx={authModalAvatar}>
              <PersonIcon sx={{ width: 25, height: 25 }} />
            </Avatar>

            {isLogin && (
              <SignIn
                openSignUp={() => authSubpageActions.openRegister()}
                openReset={() => authSubpageActions.openResetPassword()}
              />
            )}
            {isRegister && <SignUp />}
            {isResetPassword && (
              <ResetPasswordRequest
                openResetSuccess={() =>
                  authSubpageActions.openResetPasswordSuccess()
                }
              />
            )}
            {isResetSuccess && <ResetPasswordEmailSent />}
          </Box>
        )}
      </Dialog>
    </>
  );
};
