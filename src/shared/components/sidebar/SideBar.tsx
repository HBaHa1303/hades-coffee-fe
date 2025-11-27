import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SideBarItem from "./SideBarItem";
import CategoryIcon from '@mui/icons-material/Category';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AssessmentIcon from '@mui/icons-material/Assessment';

const menuItems = [
    {icon: <DashboardIcon/>, label: "Dashboard", path: "/admin"},
    {icon: <CategoryIcon/>, label: "Categories", path: "/admin/categories"},
    {icon: <TableRestaurantIcon/>, label: "Tables", path: "/admin/tables"},
    {icon: <RestaurantMenuIcon/>, label: "Menu Items", path: "/admin/menus"},
    {icon: <AssessmentIcon/>, label: "Report", path: "/admin/report"},
]

const DRAWER_WIDTH = 260;

export default function SideBar() {
    return (
    <Drawer 
        variant="permanent" 
        sx={{
            width: DRAWER_WIDTH, 
            flexShrink: 0, 
            '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
            }
        }}>
        <Toolbar>
            <Typography variant="h6" component="div" noWrap fontWeight="bold">
                Hades Admin Panel
            </Typography>
        </Toolbar>
        <Divider/>
        <Box sx={{overflow: 'auto', p: 2}}>
            <List>
                {menuItems.map(item => 
                    <SideBarItem key={item.path} icon={item.icon} label={item.label} path={item.path}></SideBarItem>
                )}
            </List>
        </Box>
    </Drawer>
    );
}