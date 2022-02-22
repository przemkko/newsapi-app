import { Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { SearchContent } from './SearchContent';

export const SearchContentInitial = () => {
  const router = useRouter();

  if (!router.isReady) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  return <SearchContent />;
};
