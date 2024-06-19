import React, { useState } from 'react';
import { Tooltip, IconButton, Menu, Typography, MenuItem, Box, Avatar } from '@mui/material';

import { Link } from 'react-router-dom';

interface UserMenuProps { 
    userPages: Array<string>
}

const UserMenu: React.FC<UserMenuProps> = ({userPages})  => { 
    const [isUserMenuOpen, setIsUserMenuOpen] = useState<null | HTMLElement>(null);

    const handleUserMenuOpened = (e: React.MouseEvent<HTMLElement>) => setIsUserMenuOpen(e.currentTarget);
    const handleUserMenuClosed = () => setIsUserMenuOpen(null);

    return ( 
        <Box sx={{ marginLeft: 'auto' }}>
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