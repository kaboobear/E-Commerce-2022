import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { headerTitle, headerWrapper } from "./styles";
import { HideUpMd } from "utils/show-and-hide/hide-up-md";
import { ShowUpMd } from "utils/show-and-hide/show-up-md";
import { Auth } from "components/Auth/Auth";
import MyPhoto from "assets/icons/photo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "features/auth/auth.selectors";
import { Avatar } from "@mui/material";
import { useAppDispatch } from "features/hooks";
import { logout } from "features/auth/auth.actions";

const pages = ["Products", "Pricing", "Blog"];

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={headerWrapper}>
      <Link
        to="/"
        children={
          <Box display="flex" alignItems="center">
            <RocketLaunchIcon sx={{ mr: 1 }} />
            <Typography variant="h6" noWrap sx={headerTitle}>
              AppleStore
            </Typography>
          </Box>
        }
      />

      <HideUpMd>
        <Box sx={{ order: -1 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            id="menu-appbar"
            keepMounted
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </HideUpMd>

      <ShowUpMd>
        <Box pt={0.5} pl={4}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              variant="text"
              sx={{ mr: 2, color: "black" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </ShowUpMd>

      <Box ml={[0, 0, "auto"]}>
        {user ? (
          <Box display="flex" alignItems="center">
            <Typography sx={{ mr: 1.5 }}>{user.username}</Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src={MyPhoto} />
            </IconButton>
          </Box>
        ) : (
          <Auth />
        )}

        <Menu
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          sx={{ mt: "45px" }}
          keepMounted
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(logout());
              handleCloseUserMenu();
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
