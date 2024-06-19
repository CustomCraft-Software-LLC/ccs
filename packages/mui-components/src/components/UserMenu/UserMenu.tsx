import React, { useState } from 'react';
import { Tooltip, IconButton, Menu, Typography, MenuItem, Box, Avatar } from '@mui/material';

import { Link } from 'react-router-dom';

const UserMenu = ({userPages: Array<string> }) => { 
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(null);

    const handleUserMenuOpened = (e: HTMLInputElement) => setIsUserMenuOpen(e.currentTarget);
    const handleUserMenuClosed = (e: HTMLInputElement) => setIsUserMenuOpen(null);

    return ( 
        <Box sx={{ marginLeft: 'auto', background: theme.palette.background.paper }}>
            <Tooltip title="Profile" sx={{ marginLeft: 'auto' }}>
                <IconButton onClick={handleUserMenuOpened} sx={{ paddingRight: 2 }}>
                <Avatar alt="Charan Lamba" src="" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '40px' }}
                id='user-menu'
                anchorEl={isUserMenuOpen}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(isUserMenuOpen)}
                onClose={handleUserMenuClosed}
            >
                {userPages.map((menu_item: any) => (
                    <MenuItem key={menu_item} onClick={handleUserMenuClosed}>
                        <Link to={`/${menu_item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                            <Typography textAlign="center">{menu_item}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default UserMenu;