"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useRouter } from 'next/navigation';
import '../styles/global.css';

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
];
// Define MUI theme
const demoTheme = createTheme({
  palette: {
    mode: 'light', // or 'dark', depending on your needs
    primary: {
      main: '#865DFF', // Example primary color
    },
    secondary: {
      main: '#E384FF', // Example secondary color
    },
    // Add more palette options as needed
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900, // corrected the value for md
      lg: 1200,
      xl: 1536,
    },
  },
});




// Demo content component
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// Layout component using Next.js routing and session management
function Layout({ children }) {
  const router = useRouter();
  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  // Authentication logic
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        localStorage.removeItem('isLoggedIn');
        setSession(null);
        router.push('/login');
      },
    };
  }, [router]);

  // Handle navigation using Next.js router
  const pathname = router.pathname;

  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider
        session={session}
        authentication={authentication}
        navigation={NAVIGATION}
      >
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
