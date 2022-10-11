import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { headerButton, headerButtonIconCustom } from 'components/Header/styles';
import MenuIcon from '@mui/icons-material/Menu';
import React, { FC, useState } from 'react';
import { menuPages } from 'services/constants/menu-pages';

export const MobileMenu: FC = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  return (
    <>
      <IconButton
        aria-label="user menu"
        aria-controls="menu-appbar"
        onClick={handleOpenNavMenu}
        sx={headerButton}
      >
        <MenuIcon sx={headerButtonIconCustom} />
      </IconButton>

      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorNav}
        open={Boolean(anchorNav)}
        onClose={handleCloseNavMenu}
        id="menu-appbar"
        keepMounted
      >
        {menuPages.map((page) => (
          <MenuItem
            sx={{ minWidth: 170 }}
            key={page}
            onClick={handleCloseNavMenu}
          >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
