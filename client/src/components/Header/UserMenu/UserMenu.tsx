import { Badge, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { headerButton, headerButtonIconCustom } from 'components/Header/styles';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { logout } from 'features/auth/auth.actions';
import { selectUser } from 'features/auth/auth.selectors';

export const UserMenu: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <IconButton
        disableFocusRipple
        onClick={user ? handleOpenUserMenu : () => null}
        sx={headerButton}
      >
        <Badge
          invisible={!user}
          color="primary"
          overlap="circular"
          variant="dot"
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <PersonIcon sx={headerButtonIconCustom} />
        </Badge>
      </IconButton>

      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        // sx={{ mt: '45px' }}
        keepMounted
      >
        <MenuItem sx={{ minWidth: 170 }} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem
          sx={{ minWidth: 170 }}
          onClick={() => {
            dispatch(logout());
            handleCloseUserMenu();
          }}
        >
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
