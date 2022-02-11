import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logOut } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handelLogOut = () => {
    handleCloseNavMenu();
    logOut();
  };
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                BikeGate
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/moreproducts"
                    >
                      More Products
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                  </Typography>
                </MenuItem>
                {/* log out button */}

                <Button onClick={handelLogOut} variant="button">
                  Log Out
                </Button>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                BikeGate
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              ></Button>
              <MenuItem>
                <Typography variant="button" sx={{ textDecoration: "none" }}>
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="button">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/moreproducts"
                  >
                    More Products
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="button">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="button">
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </Typography>
              </MenuItem>
              <Button
                onClick={logOut}
                sx={{ color: "white", flexGrow: 0, mr: "auto" }}
                variant="text"
              >
                Log Out
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {/* test user name */}
              <Typography
                sx={{ color: "white", ml: 2 }}
                variant="body2"
                display="block"
              >
                {user?.displayName}
              </Typography>
              {/* <Tooltip title="Open settings"> */}
                {/* onclick open manu onClick={handleOpenUserMenu} */}
                {user?.email && <IconButton sx={{ p: 0 }}>
                  <Typography
                    sx={{ color: "white" }}
                    variant="button"
                    display="block"
                    component="div"
                  >
                    <NavLink
                      style={{ textDecoration: "none", color: "white" }}
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </Typography>
                </IconButton>}
              {/* </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/blog"
                    >
                      My Order
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/blog"
                    >
                      Review
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/blog"
                    >
                      Pay
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/blog"
                    >
                      Manage all Order
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/makeadmin"
                    >
                      Add a Product
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/makeadmin"
                    >
                      Make Admin
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button
                    onClick={logOut}
                    sx={{ color: "black", flexGrow: 0, mr: "auto" }}
                    variant="text"
                  >
                    Log Out
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
