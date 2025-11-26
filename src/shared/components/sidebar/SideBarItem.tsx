import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface SideBarItemProps {
    icon: React.ReactNode;
    label: string;
    path: string;
}

export default function SideBarItem ({icon, label, path}: SideBarItemProps) {
    return (
        <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{label}</ListItemText>
        </ListItemButton>
    );
}