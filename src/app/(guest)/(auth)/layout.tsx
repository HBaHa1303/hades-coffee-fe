import { Box } from "@mui/material";

export default function AuthLayout ({children}: {children: React.ReactNode}) {
    return (
        <Box  sx={{
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1675435646793-f6ceb239b064?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {children}
        </Box>
    );
}