import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/libs/mui/theme";
import { QueryProvider } from "@/libs/react-query/QueryProvider";
import MuiXProvider from "@/libs/date-picker/MuiXProvider";

export const metadata: Metadata = {
  title: "Hades Coffee",
  description: "Hades Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <QueryProvider>
              <MuiXProvider>
                {children}
              </MuiXProvider>
            </QueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
