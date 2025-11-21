'use client';
import { useState } from 'react';
import { Container, Box, Typography, Button, Alert, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCategoryList } from '../hooks/useCategoryQuery';
import {
  useCreateCategory,
  useUpdateCategory,
  useDeleteCategory,
  useUpdateCategoryStatus,
} from '../hooks/useCategoryMutation';
import { useCategoryTable } from '../hooks/useCategoryTable';
import { Category } from '../model/category.model';
import CategoryTable from '../components/CategoryTable';
import CategoryForm from '../components/CategoryForm';
import CategoryFilterBar from '../components/CategoryFilterBar';

export default function CategoryPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | undefined>(undefined);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const { state, setKeyword, setPage, setSize, setStatus, getQueryParams } = useCategoryTable();
  const { data, isLoading } = useCategoryList(getQueryParams());
  const createMutation = useCreateCategory();
  const updateMutation = useUpdateCategory();
  const deleteMutation = useDeleteCategory();
  const updateStatusMutation = useUpdateCategoryStatus();

  const showSnackbar = (message: string, severity: 'success' | 'error' = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleOpenCreate = () => {
    setEditingCategory(undefined);
    setFormOpen(true);
  };

  const handleOpenEdit = (category: Category) => {
    setEditingCategory(category);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setEditingCategory(undefined);
  };

  const handleSubmit = async (name: string) => {
    try {
      if (editingCategory) {
        await updateMutation.mutateAsync({ id: editingCategory.id, data: { name } });
        showSnackbar('Cập nhật thành công!');
      } else {
        await createMutation.mutateAsync({ name });
        showSnackbar('Tạo mới thành công!');
      }
      handleCloseForm();
    } catch (error) {
      showSnackbar('Có lỗi xảy ra!', 'error');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteMutation.mutateAsync(id);
      showSnackbar('Xóa thành công!');
    } catch (error) {
      showSnackbar('Không thể xóa!', 'error');
    }
  };

  const handleToggleStatus = async (id: number, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
      await updateStatusMutation.mutateAsync({ id, data: { status: newStatus } });
      showSnackbar('Cập nhật trạng thái thành công!');
    } catch (error) {
      showSnackbar('Không thể cập nhật trạng thái!', 'error');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Quản lý Category
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenCreate}>
          Thêm mới
        </Button>
      </Box>

      <CategoryFilterBar
        keyword={state.keyword}
        status={state.status}
        onKeywordChange={setKeyword}
        onStatusChange={setStatus}
      />

      <CategoryTable
        categories={data?.categories || []}
        paging={data?.paging || {
          page: 0,
          size: 10,
          totalElements: 0,
          totalPages: 0,
          hasNext: false,
          hasPrevious: false,
          first: true,
          last: true,
        }}
        loading={isLoading}
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
        onPageChange={setPage}
        onRowsPerPageChange={setSize}
      />

      <CategoryForm
        open={formOpen}
        category={editingCategory}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        loading={createMutation.isPending || updateMutation.isPending}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}