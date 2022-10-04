import { Avatar, Box, IconButton } from '@mui/material';
import { FC } from 'react';
import { SignIn } from './components/SignIn/SignIn';
import PersonIcon from '@mui/icons-material/Person';
import { SignUp } from './components/SignUp/SignUp';
import { ResetPasswordRequest } from './components/ResetPasswordRequest/ResetPasswordRequest';
import { Dialog } from 'components/Common/Dialog/Dialog';
import { authWrapper } from './styles';
import { AuthSubpage } from 'services/enums/auth-subpage.enums';
import { ResetPasswordEmailSent } from './components/ResetPasswordRequest/ResetPasswordEmailSent';
import { useAppSelector } from 'features/hooks';
import { selectMode } from 'features/auth/auth.selectors';
import { useChangeAuthSubpage } from './hooks';

export const Auth: FC = () => {
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
      <IconButton sx={{ p: 0 }} onClick={handleOpen}>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </IconButton>

      <Dialog
        handleClose={handleClose}
        open={isOpen}
        backButton={{
          exists: isRegister || isResetPassword || isResetSuccess,
          onClick: () => authSubpageActions.openLogin(),
        }}
      >
        {isOpen && (
          <Box sx={authWrapper}>
            <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>
              <PersonIcon />
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
