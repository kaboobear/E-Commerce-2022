import { Avatar, Box, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { SignIn } from './components/SignIn/SignIn';
import PersonIcon from '@mui/icons-material/Person';
import { SignUp } from './components/SignUp/SignUp';
import { ResetPasswordRequest } from './components/ResetPasswordRequest/ResetPasswordRequest';
import { Dialog } from 'components/Common/Dialog/Dialog';
import { authWrapper } from './styles';
import { AuthState } from 'services/enums/auth-state.enums';
import { ResetPasswordEmailSent } from './components/ResetPasswordRequest/ResetPasswordEmailSent';

export const Auth: FC = () => {
  const [open, setOpen] = useState(false);
  const [authState, setAuthState] = useState<AuthState>(AuthState.Login);

  const isLogin = authState === AuthState.Login;
  const isRegister = authState === AuthState.Register;
  const isResetPassword = authState === AuthState.ResetPassword;
  const isResetPasswordSuccess = authState === AuthState.ResetPasswordSuccess;

  const handleOpen = () => {
    setAuthState(AuthState.Login);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton sx={{ p: 0 }} onClick={handleOpen}>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </IconButton>

      <Dialog
        handleClose={handleClose}
        open={open}
        backButton={{
          exists: isRegister || isResetPassword || isResetPasswordSuccess,
          onClick: () => setAuthState(AuthState.Login),
        }}
      >
        <Box sx={authWrapper}>
          <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>
            <PersonIcon />
          </Avatar>

          {isLogin && (
            <SignIn
              openSignUp={() => setAuthState(AuthState.Register)}
              openReset={() => setAuthState(AuthState.ResetPassword)}
            />
          )}
          {isRegister && <SignUp />}
          {isResetPassword && (
            <ResetPasswordRequest setAuthState={setAuthState} />
          )}
          {isResetPasswordSuccess && <ResetPasswordEmailSent />}
        </Box>
      </Dialog>
    </>
  );
};
