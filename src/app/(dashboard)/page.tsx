import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';

export default function DashboardPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4}}>
          <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <CategoryIcon color="primary" sx={{ fontSize: 48 }} />
            <Box>
              <Typography variant="h6">Categories</Typography>
              <Typography variant="h4">24</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4}}>
          <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <InventoryIcon color="secondary" sx={{ fontSize: 48 }} />
            <Box>
              <Typography variant="h6">Products</Typography>
              <Typography variant="h4">156</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4}}>
          <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <PeopleIcon color="success" sx={{ fontSize: 48 }} />
            <Box>
              <Typography variant="h6">Users</Typography>
              <Typography variant="h4">89</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Chào mừng đến với Admin Panel
          </Typography>
          <Typography color="text.secondary">
            Đây là trang dashboard tổng quan. Sử dụng menu bên trái để điều hướng đến các module khác.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}