'use client';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { CategoryStatus } from '../model/category.model';

interface CategoryFilterBarProps {
  keyword: string;
  status?: CategoryStatus;
  onKeywordChange: (keyword: string) => void;
  onStatusChange: (status: CategoryStatus | undefined) => void;
}

export default function CategoryFilterBar({
  keyword,
  status,
  onKeywordChange,
  onStatusChange,
}: CategoryFilterBarProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="Tìm kiếm"
        placeholder="Nhập tên category..."
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
        size="small"
        sx={{ minWidth: 300 }}
      />
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel>Trạng thái</InputLabel>
        <Select
          value={status || ''}
          label="Trạng thái"
          onChange={(e) => onStatusChange(e.target.value ? (e.target.value as CategoryStatus) : undefined)}
        >
          <MenuItem value="">Tất cả</MenuItem>
          <MenuItem value="ACTIVE">Active</MenuItem>
          <MenuItem value="INACTIVE">Inactive</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}