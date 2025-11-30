"use client";

import { Button, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { useState } from "react";

export default function AvatarUser () {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar>H</Avatar>  
            </IconButton>
            <Menu 
                anchorEl={anchorEl} 
                open={open}
                onClose={handleClose}
            >
                <MenuItem>Đăng xuất</MenuItem>
            </Menu>
        </>
    );
}