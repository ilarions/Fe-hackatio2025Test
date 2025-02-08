"use client"
import "./globals.css";
import { useRouter } from 'next/router';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Drawer, Box, CssBaseline, Toolbar, IconButton, Typography, useTheme, styled, Stack, List, ListItemText, ListItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as React from 'react';
import { MenuList } from "./components/menuList";
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== "open" })<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const MenuLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => { setOpen(true) };
  const handleDrawerClose = () => { setOpen(false) };
  const navList = ["Quiz", "About us", "Favoutites"]
  // const router = useRouter()
  // console.log(router.pathname)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "white" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={[{ mr: 2 }, open && { display: 'none' }]}><MenuIcon sx={{ color: "#080614" }} /></IconButton>
          <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }}>
            <Typography variant="h6" noWrap component="div" sx={{ color: "#080614", gap: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <LiveHelpOutlinedIcon />Persistent drawer
            </Typography>
            <List sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
              {navList.map((el) => <ListItem key={el} sx={{ width: "auto" }}><ListItemText sx={{ color: "#080614" }}>{el}</ListItemText></ListItem>)}
            </List>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '1& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <MenuList />
      </Drawer>
      <Main open={open} >
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  )
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MenuLayout>
          {children}
        </MenuLayout>
      </body>
    </html>
  );
}
