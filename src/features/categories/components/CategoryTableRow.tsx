import { Chip, IconButton, Menu, MenuItem, TableCell, TableRow } from "@mui/material";
import { Category } from "../models/categories.model";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

interface CategoryTableRowProps {
    category: Category;
    onEdit: (category: Category) => void;
    onDelete: (id: number) => void;
    onToggleStatus: (id: number, currentStatus: string) => void;
}

export default function CategoryTableRow({
    category,
    onEdit, 
    onDelete, 
    onToggleStatus
}: CategoryTableRowProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    function handleEdit() {
        onEdit(category);
        handleClose();
    }

    function handleToggleStatus() {
        onToggleStatus(category.id, category.status);
        handleClose();
    }

    function handleDelete() {
        if (confirm(`Bạn có chắc chắn muốn xóa ${category.name}?`)) {
            onDelete(category.id);
        }
        handleClose();
    }

    return (
        <TableRow>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>
                <Chip 
                    label={category.status} 
                    color={category.status === 'ACTIVE' ? 'success': 'default'}
                    size="small"
                />
            </TableCell>
            <TableCell align="right">
                <IconButton onClick={handleClick}>
                    <MoreVertIcon/>
                </IconButton>
                <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                    <MenuItem onClick={handleEdit}>Sửa</MenuItem>
                    <MenuItem onClick={handleToggleStatus}>
                        {category.status === 'ACTIVE' ? "Deactivate" : "Activate"}
                    </MenuItem>
                    <MenuItem onClick={handleDelete}>Xóa</MenuItem>
                </Menu>
            </TableCell>
        </TableRow>
    );
}