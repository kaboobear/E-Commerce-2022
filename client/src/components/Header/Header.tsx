import React, { FC } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {
  headerButton,
  headerButtonIcon,
  headerTitle,
  headerWrapper,
} from './styles';
import { HideUpMd } from 'services/utils/show-and-hide/hide-up-md';
import { ShowUpMd } from 'services/utils/show-and-hide/show-up-md';
import { Auth } from 'components/Auth/Auth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShowUpSm } from 'services/utils/show-and-hide/show-up-sm';
import { menuPages } from 'services/constants/menu-pages';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { UserMenu } from './UserMenu/UserMenu';
import { Link } from 'react-router-dom';
import { HideUpSm } from 'services/utils/show-and-hide/hide-up-sm';

export const Header: FC = () => {
  return (
    <Box sx={headerWrapper}>
      <Link
        to="/"
        children={
          <Box display="flex" alignItems="center">
            <RocketLaunchIcon sx={{ mr: 1 }} />
            <HideUpSm>
              <Typography variant="subtitle2" noWrap sx={headerTitle}>
                Apple
              </Typography>
            </HideUpSm>
            <ShowUpSm>
              <Typography variant="subtitle2" noWrap sx={headerTitle}>
                AppleStore
              </Typography>
            </ShowUpSm>
          </Box>
        }
      />

      <ShowUpMd>
        <Box pt={0.5} pl={4}>
          {menuPages.map((page) => (
            <Button key={page} variant="text" sx={{ mr: 2, color: 'black' }}>
              {page}
            </Button>
          ))}
        </Box>
      </ShowUpMd>

      <Box sx={{ display: 'flex' }}>
        <IconButton sx={headerButton}>
          <FavoriteIcon sx={headerButtonIcon} />
        </IconButton>

        <IconButton sx={headerButton}>
          <ShoppingCartIcon sx={headerButtonIcon} />
        </IconButton>

        <Auth>
          <UserMenu />
        </Auth>

        {/* {user ? (
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src={MyPhoto} />
            </IconButton>
          </Box>
        ) : (
          <Auth />
        )} */}

        <HideUpMd>
          <MobileMenu />
        </HideUpMd>
      </Box>
    </Box>
  );
};
