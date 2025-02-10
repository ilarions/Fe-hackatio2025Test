"use client"
import "./globals.css";
import { IconButton, Typography, Stack, List, ListItemText, ListItem, Button, AppBar, TextField, InputAdornment } from "@mui/material"
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { NavMenu } from "../components/navMenu";
import React from "react";

export const MenuLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log("CLICK")
  };
  const handleClose = () => { setAnchorEl(null) };
  const navList = ["Quizes", "My quizes", "Favoutites"]

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#362989", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: "6px 30px", width: "100%" }}>
        <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", padding: "10px", gap: "100px" }}>
          <Typography variant="h6" noWrap component="div" sx={{ color: "white", gap: "10px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "700", fontSize: "30px" }}>
            <LiveHelpOutlinedIcon sx={{ fontSize: "40px" }} />ILarions Quiz
          </Typography>
          <List sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }}>
            {navList.map((el) => <ListItem key={el} sx={{ width: "auto", padding: "0px" }}><ListItemText sx={{ color: "white" }}>{el}</ListItemText></ListItem>)}
          </List>
        </Stack>
        <TextField
          hiddenLabel
          variant="outlined"
          sx={{ bgcolor: "white", width: "400px" }}
          slotProps={{ input: { endAdornment: <InputAdornment position="end"><SearchOutlinedIcon /></InputAdornment> } }}
        />
        <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexDirection: "row", marginTop: "10px" }}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AccountCircleOutlinedIcon sx={{ color: "white", fontSize: "35px" }} />
          </IconButton>
          <Button variant="outlined" sx={{ bgcolor: "white", fontWeight: "600", color: "#4635B1", padding: "5px 20px" }}>+ New Quiz</Button>
        </Stack>
        <NavMenu closeClick={handleClose} state={anchorEl} openCheck={open} />
      </AppBar>
      {children}
    </>
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
