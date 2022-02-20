import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

import { CountrySelector } from './CountrySelector';
import { TOP_NAVIGATION_ITEMS } from '../../constants';
import { useCountry } from '../../hooks/params';

export const Header = ({}): JSX.Element => {
  const country = useCountry();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
          >
            NewsAPI App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {TOP_NAVIGATION_ITEMS.map((item) => (
                <MenuItem key={item.href} onClick={handleCloseNavMenu}>
                  <Link
                    key={item.href}
                    href={{
                      pathname: item.href,
                      query: { country },
                    }}
                    passHref
                  >
                    <Typography textAlign="center">{item.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            NewsAPI App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {TOP_NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={{
                  pathname: item.href,
                  query: { country },
                }}
                passHref
              >
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
          <CountrySelector />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
