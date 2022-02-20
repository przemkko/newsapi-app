import React from 'react';
import { Header } from '../header';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Paper sx={{ p: 2, mt: 2 }}>{children}</Paper>
      </Container>
    </>
  );
};
