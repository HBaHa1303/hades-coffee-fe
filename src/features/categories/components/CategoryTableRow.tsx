'use client';
import { TableRow, TableCell, Chip, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Category } from '../model/category.model';

interface CategoryTableRowProps {
  category: Category;
  onEdit: (category: Category) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number, currentStatus: string) => void;
}

export default function CategoryTableRow({ category, onEdit, onDelete, onToggleStatus }: CategoryTableRowProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    onEdit(category);
    handleClose();
  };

  const handleDelete = () => {
    if (confirm(`Bạn có chắc muốn xóa "${category.name}"?`)) {
      onDelete(category.id);
    }
    handleClose();
  };

  const handleToggleStatus = () => {
    onToggleStatus(category.id, category.status);
    handleClose();
  };

  return (
    <TableRow hover>
      <TableCell>{category.id}</TableCell>
      <TableCell>{category.name}</TableCell>
      <TableCell>
        <Chip
          label={category.status}
          color={category.status === 'ACTIVE' ? 'success' : 'default'}
          size="small"
        />
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={handleClick} size="small">
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleEdit}>Sửa</MenuItem>
          <MenuItem onClick={handleToggleStatus}>
            {category.status === 'ACTIVE' ? 'Deactivate' : 'Activate'}
          </MenuItem>
          <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
            Xóa
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}
