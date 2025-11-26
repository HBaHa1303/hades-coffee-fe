"use client";

import { Box, Container, Typography } from "@mui/material";

export default function AdminCategoriesPage(){

    return <Container maxWidth="lg" sx={{py: 4}}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" component="h1">Quản lý Category</Typography>
        </Box>
    </Container>
}   