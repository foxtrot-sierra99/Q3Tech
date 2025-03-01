import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  IconButton,
  Divider,
  MenuItem,
  Select,
  Box,
  Card,
  CssBaseline,
  useMediaQuery,
  Button,
  useTheme,
  FormControl,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Work as WorkIcon,
  Help as HelpIcon,
  Star as StarIcon,
  Sync as SyncIcon,
} from "@mui/icons-material";

const Dashboard = ({ setIsLoggedIn }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeEnough = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState(!isMdScreen);
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getDrawerWidth = () => {
    if (isXsScreen) return 200;
    return 240;
  };

  const drawerWidth = getDrawerWidth();

  useEffect(() => {
    setOpen(!isMdScreen);
  }, [isMdScreen]);

  const menuItems = [
    { text: "Employee Services", icon: <WorkIcon /> },
    { text: "System Help Desk", icon: <HelpIcon /> },
    { text: "My Favourites", icon: <StarIcon /> },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Render the search component
  const renderSearchField = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "15px",
        flexGrow: 1,
        maxWidth: { xs: "100%", sm: "400px" },
        overflow: "hidden",
        border: "1px solid #ccc",
      }}
    >
      <FormControl size="small">
        <Select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          size="small"
          displayEmpty
          sx={{
            fontSize: { xs: 12, sm: 14 },
            width: { xs: "60px", sm: "70px" },
            backgroundColor: "white",

            "& fieldset": {
              border: "none",
            },
            "& .MuiSelect-select": {
              padding: { xs: "4px 6px", sm: "6px 8px" },
            },
          }}
        >
          <MenuItem value="all">All</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant="standard"
        placeholder="Search work order, Customer"
        InputProps={{ disableUnderline: true }}
        sx={{
          flexGrow: 1,
          padding: { xs: "2px 4px", sm: "4px 8px" },
          "& input": {
            fontSize: { xs: "14px", sm: "16px" },
          },
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton sx={{ color: "#1976D2" }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          background: "#4F46E5",
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            minHeight: { xs: "56px", sm: "64px" },
            padding: { xs: "0 8px", sm: "0 16px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              gap: { xs: 1, sm: 2, md: 4 },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 2 },
              }}
            >
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Typography variant={isXsScreen ? "subtitle1" : "h6"} noWrap>
                ABAWAT
              </Typography>
              {isLargeEnough && (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "400px",
                  }}
                >
                  {renderSearchField()}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.5, sm: 1, md: 2 },
                ml: isLargeEnough ? "0" : "auto",
                flexShrink: 0,
              }}
            >
              {!isXsScreen && (
                <Button
                  variant="contained"
                  startIcon={<SyncIcon />}
                  sx={{
                    backgroundColor: "white",
                    color: "#4F46E5",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: { xs: "4px 8px", sm: "6px 12px" },
                    fontSize: { xs: "12px", sm: "14px" },
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {isSmScreen ? "E-Services" : "Electronic Services"}
                </Button>
              )}
              <IconButton
                color="inherit"
                size={isXsScreen ? "small" : "medium"}
              >
                <NotificationsIcon fontSize={isXsScreen ? "small" : "medium"} />
              </IconButton>

              {!isXsScreen && (
                <IconButton
                  color="inherit"
                  size={isXsScreen ? "small" : "medium"}
                >
                  <SettingsIcon fontSize={isXsScreen ? "small" : "medium"} />
                </IconButton>
              )}

              <IconButton
                color="inherit"
                size={isXsScreen ? "small" : "medium"}
              >
                <AccountCircleIcon fontSize={isXsScreen ? "small" : "medium"} />
              </IconButton>

              <IconButton
                color="inherit"
                onClick={() => setIsLoggedIn(false)}
                size={isXsScreen ? "small" : "medium"}
              >
                <LogoutIcon fontSize={isXsScreen ? "small" : "medium"} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant={isMdScreen ? "temporary" : "permanent"}
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 100,
            background: "#4F46E5",
            color: "white",
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: "40px", sm: "40px" },
          }}
        />
        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
        <List sx={{ marginTop: "30px" }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              sx={{
                padding: { xs: 1.5, sm: 2 },
                justifyContent: open ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{ color: "white", minWidth: { xs: 36, sm: 40 } }}
              >
                {item.icon}
              </ListItemIcon>
              {!isXsScreen && open && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Dashboard;
