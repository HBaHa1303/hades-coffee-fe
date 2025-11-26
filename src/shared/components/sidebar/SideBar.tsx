import { Box, Divider, Drawer, List, Toolbar } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SideBarItem from "./SideBarItem";

const menuItems = [
    {icon: <DashboardIcon/>, label: "Dashboard", path: "/admin/dashboard"}
]

export default function SideBar() {
    return (
    <Drawer>
        <Toolbar>
            admin
        </Toolbar>
        <Divider></Divider>
        <Box>
            <List>
                {menuItems.map(item => 
                    <SideBarItem key={item.path} icon={item.icon} label={item.label} path={item.path}></SideBarItem>
                )}
            </List>
        </Box>
    </Drawer>
    );
}