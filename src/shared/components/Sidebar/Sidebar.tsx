'use client';
import { Drawer, List, Toolbar, Box, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarItem from './SidebarItem';

const DRAWER_WIDTH = 260;

const menuItems = [
  { icon: <DashboardIcon />, label: 'Dashboard', path: '/dashboard' },
  { icon: <CategoryIcon />, label: 'Categories', path: '/categories' },
  { icon: <InventoryIcon />, label: 'Products', path: '/products' },
  { icon: <PeopleIcon />, label: 'Users', path: '/users' },
  { icon: <SettingsIcon />, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" fontWeight="bold">
          Admin Panel
        </Typography>
      </Toolbar>
      <Divider />
      <Box sx={{ overflow: 'auto', p: 2 }}>
        <List>
          {menuItems.map((item) => (
            <SidebarItem key={item.path} icon={item.icon} label={item.label} path={item.path} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
