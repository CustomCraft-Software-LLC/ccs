import * as React from 'react';
import './SidebarItem.css';
import PropTypes from 'prop-types';
import { Avatar, ListItem, ListItemButton, ListItemAvatar, ListItemText, ListItemIcon } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { Link } from 'react-router-dom';

interface SidebarItemProps { 
  bgColor?: string;
  to?: string;
  name?: string;
  avatar?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ bgColor = 'rgba(255,255,255,1.0)', to = '/', name = "", avatar = "" }) => {
  
  const style: React.CSSProperties = {
    backgroundColor: bgColor,
  }

  return (
    <ListItem>
      <ListItemButton component={Link} to={to}>
        <ListItemAvatar>
          <Avatar>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemIcon>

        </ListItemIcon>
        <ListItemText>
          
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;