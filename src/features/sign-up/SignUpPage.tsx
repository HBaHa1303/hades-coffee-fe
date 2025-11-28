import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export function SignUpPage() {
    return (
        <Paper sx={{borderRadius: 8, width: 500, height: 750}}>
            {/* <form onSubmit={handleSubmit}> */}
                <Box sx={{px: 4, py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                <Typography variant="h4" component="h1" sx={{fontWeight: 700}}>Sign Up</Typography>
                <Typography variant="h5" component="div" sx={{marginBottom: 4}}>Welcome to Hades Coffee</Typography>
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
                />
                <TextField
                    label="First Name"
                    fullWidth
                    type="text"
                    required
                    margin="dense"
                />
                <TextField
                    label="Last Name"
                    fullWidth
                    type="text"
                    required
                    margin="dense"
                />
                <DatePicker 
                    label="Date of Birth" 
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            required: true,
                            margin: "dense"
                        }
                    }}
                    sx={{marginBottom: 4}}
                />
                <Button type="submit" variant="contained" fullWidth size="large" sx={{borderRadius: 2}}>Sign Up</Button>
            </Box>
            {/* </form> */}
        </Paper>
    );
}