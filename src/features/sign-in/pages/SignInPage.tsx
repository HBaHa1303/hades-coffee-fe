import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

const handleSubmit = async (email: string, password: string) => {

}

export default function SignInPage () {
    return (
        // <Box  sx={{
        //     height: '100vh', 
        //     display: 'flex', 
        //     alignItems: 'center', 
        //     justifyContent: 'center', 
        //     backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1675435646793-f6ceb239b064?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center'
        // }}>
            <Paper sx={{borderRadius: 8, width: 500, height: 500}}>
                {/* <form onSubmit={handleSubmit}> */}
                    <Box sx={{px: 4, py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                    <Typography variant="h4" component="h1" sx={{fontWeight: 700}}>Sign In</Typography>
                    <Typography variant="h5" component="div" sx={{marginBottom: 4}}>Welcome back to Hades Coffee</Typography>
                    <TextField
                        autoFocus
                        label="Email"
                        fullWidth
                        type="text"
                        required
                        margin="dense"
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        type="password"
                        required
                        margin="dense"
                        sx={{marginBottom: 4}}
                    />
                    <Button type="submit" variant="contained" fullWidth size="large" sx={{borderRadius: 2}}>Sign In</Button>
                </Box>
                {/* </form> */}
            </Paper>
        // </Box>
    );
}