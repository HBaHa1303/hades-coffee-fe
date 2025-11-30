"use client"

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface SignInFormProps {
    onSubmit: (email: string, password: string) => void;
}

export default function SignInForm({onSubmit}: SignInFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() && password.trim()) {
            onSubmit(email, password);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{px: 4, py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                <Typography variant="h4" component="h1" sx={{fontWeight: 700}}>Sign In</Typography>
                <Typography variant="h5" component="div" sx={{marginBottom: 4}}>Welcome back to Hades Coffee</Typography>
                <TextField
                    autoFocus
                    label="Email"
                    fullWidth
                    type="email"
                    required
                    margin="dense"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    fullWidth
                    type="password"
                    required
                    margin="dense"
                    sx={{marginBottom: 4}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" fullWidth size="large" sx={{borderRadius: 2}}>Sign In</Button>
            </Box>
        </form>
    );
}