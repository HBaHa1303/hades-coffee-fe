import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { Category, PagingInfo } from "../models/categories.model";
import CategoryTableRow from "./CategoryTableRow";

interface CategroyTableProps {
    categories: Category[];
    paging: PagingInfo;
    loading: boolean;
    onEdit: (category: Category) => void;
    onDelete: (id: number) => void;
    onToggleStatus: (id: number, currentStatus: string) => void;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (size: number) => void;
}

export default function CategoryTable({
    categories,
    paging,
    loading, 
    onEdit,
    onDelete,
    onToggleStatus,
    onPageChange,
    onRowsPerPageChange
}: CategroyTableProps) {
    if (loading) {
        return (
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', py: 8}}>
                <CircularProgress></CircularProgress>
            </Box>
        );
    }

    if (categories.length === 0) {
        return (
            <Paper sx={{p: 4, textAlign: 'center'}}>
                <Typography color="text.secondary">Không có dữ liệu</Typography>
            </Paper>
        );
    }
    
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Tên</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell align="right">Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map(category => 
                            <CategoryTableRow 
                                key={category.id} 
                                category={category} 
                                onEdit={onEdit}
                                onDelete={onDelete} 
                                onToggleStatus={onToggleStatus}
                            />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination 
                component="div"
                count={paging.totalElements}
                page={paging.page}
                onPageChange={(_, newPage) => onPageChange(newPage)}
                rowsPerPage={paging.size}
                onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value))}
                rowsPerPageOptions={[5, 10, 25, 50]}
                labelRowsPerPage="Số dòng mỗi trang"
                labelDisplayedRows={({from, to, count}) => `${from} - ${to} trong tổng ${count}`}
            />
        </Paper>
    );
}