import { Container, Box, Typography, Paper } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function ProductsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <InventoryIcon sx={{ fontSize: 40 }} color="primary" />
        <Typography variant="h4" component="h1">
          Quản lý Products
        </Typography>
      </Box>
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Module Products - Đang phát triển
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          Trang này sẽ chứa danh sách và quản lý sản phẩm
        </Typography>
      </Paper>
    </Container>
  );
}