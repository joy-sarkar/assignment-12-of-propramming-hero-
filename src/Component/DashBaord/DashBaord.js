import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import DashBoardHome from "./DashBoardHome/DashBoardHome";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import Pay from "./Pay/Pay";
import "./DashBoard.css";
import ManageAllOder from "./ManageAllOder/ManageAllOder";
import Addbikes from "./AddBikes/Addbikes";
import MyOrder from "./MyOrder/MyOrder";
import Review from "./Review/Review";
import useAuth from "../../Hooks/useAuth";


const drawerWidth = 170;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin,logOut} = useAuth();

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const log_out = () =>{
      logOut()
  }
  const drawer = (
    <div>
      <Box className="nested_header">
        <Link style={{ textDecoration: "none", color: "black" }} to="/home">
          <Button>Home</Button>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to={`${url}`}>
          <Button>Dash Board</Button>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
          <Button>Pay</Button>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to={`${url}/myorder`}>
          <Button color="inherit">My Order</Button>
        </Link>
        <br />
        {admin && <Box>
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/manageallorder`}
            >
              <Button color="inherit">Manage All Order</Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to={`${url}/addbikes`}>
              <Button color="inherit">Add Bikes</Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
              <Button>Make Admin</Button>
            </Link>
            <br />
          </Box>
        }
        <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
          <Button color="inherit">Review</Button>
        </Link>
        <br/>
        <Link style={{ textDecoration: "none" }}>
          <Button onClick={log_out } >Log Out</Button>
        </Link>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body2" noWrap component="div">
            Dash Board
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(70% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Nested  routed */}
        <Switch>
          <Route exact path={path}>
            <DashBoardHome></DashBoardHome>
          </Route>
          <Route exact path={`${path}/makeAdmin`} component={MakeAdmin} />

          <Route exact path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route exact path={`${path}/manageallorder`}>
            <ManageAllOder></ManageAllOder>
          </Route>
          <Route exact path={`${path}/myorder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route exact path={`${path}/addbikes`}>
            <Addbikes></Addbikes>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
