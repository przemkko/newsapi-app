import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useRouter } from 'next/router';

export const CountrySelector = () => {
  const router = useRouter();
  const { country } = router.query;
  const isSingleNewsView = router.pathname === '/news/[country]/news';

  const switchCountry = (newCountry: string | null) => {
    if (!newCountry || newCountry === country) {
      return;
    }
    router.push({
      pathname: router.pathname,
      query: { country: newCountry },
    });
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <ToggleButtonGroup
        value={country}
        onChange={(e, value) => switchCountry(value)}
        exclusive
        aria-label="country selections"
      >
        <ToggleButton
          value="gb"
          aria-label="left aligned"
          disabled={isSingleNewsView || country === 'gb'}
        >
          GB
        </ToggleButton>
        <ToggleButton
          value="us"
          aria-label="centered"
          disabled={isSingleNewsView || country === 'us'}
        >
          US
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
