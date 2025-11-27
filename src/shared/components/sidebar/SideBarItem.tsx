"use client"

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

interface SideBarItemProps {
    icon: React.ReactNode;
    label: string;
    path: string;
}

export default function SideBarItem ({icon, label, path}: SideBarItemProps) {
    const pathName = usePathname();
    const router = useRouter();
    const isActive = pathName === path;

    const handleClick = () => {
        router.push(path);
    }

    return (
        <ListItemButton onClick={handleClick} selected={isActive} 
        sx={{
        borderRadius: 1,
        mb: 0.5,
        '&.Mui-selected': {
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
          '& .MuiListItemIcon-root': {
            color: 'white',
          },
        },
      }}>
            <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>
    );
}