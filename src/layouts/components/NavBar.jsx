import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            App
          </Typography>
          <IconButton edge="start" color="error" aria-label="logout">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

NavBar.defaultProps = {
  drawerWidth: 240,
};
