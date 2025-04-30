import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Grid2 from '@mui/material/Grid2';
import { AppBar, Drawer } from '@/components';
import { AppThemeProvider } from '@/theme';
import './globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });
const defaultTitle = 'RHF-Mui Components';

export const metadata: Metadata = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle
  },
  description: 'Examples for RHF-Mui Components'
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: 'mui' }}>
          <AppThemeProvider>
            <AppBar />
            <Grid2 container className="content">
              <Grid2
                size={{ md: 3 }}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                <Drawer />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 9 }}>
                {children}
              </Grid2>
            </Grid2>
            <ToastContainer
              autoClose={3000}
              limit={1}
              closeButton
              style={{ fontSize: '1rem' }}
            />
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
