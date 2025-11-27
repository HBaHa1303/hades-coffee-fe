"use client"
import { CategoryStatus } from "@/shared/types/status";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

interface CategoryFilterBarProps {
    keyword?: string,
    status?: CategoryStatus,
    onKeywordChange: (keyword: string) => void,
    onStatusChange: (status: CategoryStatus | undefined) => void
}

export default function CategoryFilterBar({
    keyword,
    status,
    onKeywordChange,
    onStatusChange
}: CategoryFilterBarProps) {
    return (
        <Box sx={{display: 'flex', gap: 2, mb: 3}}>
            <TextField 
                label="Tìm kiếm"
                placeholder="Nhập tên category..."
                value={keyword}
                onChange={(e) => onKeywordChange(e.target.value)}
                size="small"
                sx={{minWidth: 300}}
            />
            <FormControl size="small" sx={{minWidth:150}}>
                <InputLabel>Trạng thái</InputLabel>
                <Select 
                    value={status || ''}
                    onChange={(e) => onStatusChange(e.target.value ? (e.target.value as CategoryStatus) : undefined)} 
                    label="Trạng thái"
                >
                    <MenuItem value="">Tất cả</MenuItem>
                    <MenuItem value="ACTIVE">Active</MenuItem>
                    <MenuItem value="INACTIVE">Inactive</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}