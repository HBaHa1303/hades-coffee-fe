"use client";

import { Alert, Box, Button, Container, Snackbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CategoryFilterBar from "../components/CategoryFilterBar";
import { useCategoriesTable } from "../hooks/useCategoriesTable";
import CategoryTable from "../components/CategoryTable";
import { Category } from "../models/categories.model";
import { useCategories } from "../hooks/useCategoriesQuery";
import { useState } from "react";
import { useChangeStatusCategory, useCreateCategory, useDeleteCategory, useUpdateCategory } from "../hooks/useCategoriesMutation";
import CategoryForm from "../components/CategoryForm";

export default function AdminCategoriesPage(){
    const [formOpen, setFormOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | undefined>(undefined);
    const [snackbar, setSnackbar] = useState({open: false, message: '', severity: 'success' as 'success' | 'error'});

    const {state, setKeyword, setPage, setSize, setStatus, getQueryParams} = useCategoriesTable();
    const {data, isLoading} = useCategories(getQueryParams());

    const createMutation = useCreateCategory();
    const updateMutation = useUpdateCategory();
    const deleteMutation = useDeleteCategory();
    const changeStatusMutation = useChangeStatusCategory();

    const showSnackbar = (message: string, severity: 'success' | 'error' = 'success') => {
        setSnackbar({open: true, message: message, severity: severity})
    }

    const handleOpenCreate = () => {
        setEditingCategory(undefined);
        setFormOpen(true);
    }

    const handleOpenEdit = (category: Category) => {
        setEditingCategory(category);
        setFormOpen(true);
    }

    const handleCloseForm = () => {
        setFormOpen(false);
        setEditingCategory(undefined);
    }

    const handleSubmit = async (name: string) => {
        try {
            if (editingCategory) {
                await updateMutation.mutateAsync({id: editingCategory.id, data: {name}})
                showSnackbar('Cập nhật thành công');
            } else {
                await createMutation.mutateAsync({name})
                showSnackbar('Tạo mới thành công');
            }
            handleCloseForm();
        } catch (error){
            showSnackbar('Có lỗi xảy ra!', 'error');
        }
    }

    const handleDelete = (id: number) => {
        try {
            deleteMutation.mutateAsync(id);
            showSnackbar('Xóa thành công');
        } catch (error) {
            showSnackbar('Không thể xóa!', 'error');
        }        
    }

    const handleToggleStatus = (id: number, currentStatus: string) => {
        try {
            const newStatus = currentStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
            changeStatusMutation.mutateAsync({id, data: {status: newStatus}});
            showSnackbar('Cập nhật trạng thái thành công');
        } catch (error) {
            showSnackbar('Không thể cập nhật trạng thái!', 'error');
        }  
    }

    return <Container maxWidth="lg" sx={{py: 4}}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" component="h1">Quản lý Category</Typography>
            <Button 
                variant="contained" 
                startIcon={<AddIcon/>}
                onClick={handleOpenCreate}
            >
                Thêm mới
            </Button>
        </Box>

        <CategoryFilterBar keyword={state.keyword} status={state.status} onKeywordChange={setKeyword} onStatusChange={setStatus}/>
        <CategoryTable 
            loading={isLoading}
            categories={data?.data || []}
            onEdit={handleOpenEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus} 
            paging={data?.paging || {
                page: 0,
                size: 10, 
                totalElements: 0,
                totalPages: 0,
                hasNext: false,
                hasPrevious: false,
                first: true,
                last: true
            }} 
            onPageChange={setPage} 
            onRowsPerPageChange={setSize}/>

        <CategoryForm 
            open={formOpen}
            category={editingCategory}
            loading={isLoading} 
            onClose={handleCloseForm} 
            onSubmit={handleSubmit}        
        />

        <Snackbar 
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={() => setSnackbar({...snackbar, open: false})}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            <Alert severity={snackbar.severity} onClose={() => setSnackbar({...snackbar, open: false})}>
                {snackbar.message}
            </Alert>
        </Snackbar>
    </Container>
}   