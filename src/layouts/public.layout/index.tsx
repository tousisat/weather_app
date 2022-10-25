import type { FC, ReactNode } from 'react';
import { Container, Box } from '@mui/material';
import { TopBar } from '../@shared/TopBar';

interface IProps {
  children?: ReactNode;
}

const PublicLayout: FC<IProps> = ({ children }) => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: (theme) => theme.palette.grey['100'] }}>
      <Container maxWidth="xl" sx={{ minHeight: '100vh' }}>
        <TopBar />
        {children}
      </Container>
    </Box>
  );
};

export default PublicLayout;
