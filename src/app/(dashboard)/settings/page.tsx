import { Container, Box, Typography, Paper, Divider } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export default function SettingsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <SettingsIcon sx={{ fontSize: 40 }} color="primary" />
        <Typography variant="h4" component="h1">
          Cài đặt hệ thống
        </Typography>
      </Box>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Cài đặt chung
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography color="text.secondary">
          Module Settings - Đang phát triển
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          Trang này sẽ chứa các cài đặt cấu hình hệ thống
        </Typography>
      </Paper>
    </Container>
  );
}