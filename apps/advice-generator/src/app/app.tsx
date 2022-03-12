import { FC, ReactNode } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';

import AdviceCard from './adviceCard/adviceCard';
import Theme from './theme/theme';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <CssBaseline />
        <MainContent>
          <AdviceCard />
        </MainContent>
      </Theme>
    </QueryClientProvider>
  );
}

export default App;

interface MainContentProps {
  children?: ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'neutral.dark'
    }}
  >
    {children}
  </Box>
);
