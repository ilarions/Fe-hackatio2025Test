import { Menu, MenuItem, ListItemIcon, Link } from "@mui/material"
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';

interface INav {
    closeClick: any,
    state: any,
    openCheck: boolean,
    handler?: () => void,
    link?: string
}

export const NavMenu: React.FC<INav> = ({ closeClick, state, openCheck }) => {
    const logoutHandler = () => {

    }
    const list = [
        { title: "Profile", icon: <Avatar />, link: "/profile" },
        { handler: () => logoutHandler, title: "Logout", icon: <Logout fontSize="small" /> }
    ]
    return (
        <Menu
            anchorEl={state}
            id="account-menu"
            open={openCheck}
            onClose={closeClick}
            onClick={closeClick}
            slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {list.map((el) => (
                <MenuItem onClick={closeClick} key={el.title}>
                    <Link href={el.link} sx={{ textDecoration: "none", color: "#4635B1" }}><ListItemIcon>{el.icon}</ListItemIcon>{el.title}</Link>
                </MenuItem>
            ))}
        </Menu>
    )
}