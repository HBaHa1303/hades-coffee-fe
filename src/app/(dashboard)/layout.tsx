import SideBar from "@/shared/components/sidebar/SideBar";
import { Box } from "@mui/material";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <Box sx={{display: 'flex'}}>
            <SideBar/>
            <Box sx={{flexGrow: 1}}>
                {children}
            </Box>
        </Box>
    )
}