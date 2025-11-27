"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CategoryFilterBar from "../components/CategoryFilterBar";
import { CategoryStatus } from "@/shared/types/status";
import { useCategoriesTable } from "../hooks/useCategoriesTable";

export default function AdminCategoriesPage(){
    const {state, setKeyword, setPage, setSize, setStatus, getQueryParams} = useCategoriesTable();

    return <Container maxWidth="lg" sx={{py: 4}}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" component="h1">Quản lý Category</Typography>
            <Button variant="contained" startIcon={<AddIcon/>}>Thêm mới</Button>
        </Box>

        <CategoryFilterBar keyword={state.keyword} status={state.status} onKeywordChange={setKeyword} onStatusChange={setStatus}/>
    </Container>
}   