import Typography from '@mui/material/Typography';
import { useCountry, useSearchTerm } from '../../../hooks/params';
import { getCountryDisplayName } from '../../../constants';
import { Box, TextField } from '@mui/material';
import { useDebounce } from '../../../hooks/util';
import { useNewsQuery } from '../../../hooks/query/news';
import { useEffect, useState } from 'react';
import { TopNewsOptions } from '../../../api/news';
import { NewsItemCollection } from '../../news-item/collection';
import { useRouter } from 'next/router';

export const SearchContent = () => {
  const country = useCountry();
  const querySearchTerm = useSearchTerm();
  const router = useRouter();

  const [queryOptions, setQueryOptions] = useState<TopNewsOptions>({
    searchTerm: querySearchTerm ?? '',
  });
  const debounceOptions = useDebounce(queryOptions, 500);

  const { isLoading, data } = useNewsQuery(country, debounceOptions);
  useEffect(() => {
    if (country && debounceOptions.searchTerm !== router.query.searchTerm) {
      router.replace(
        {
          pathname: router.pathname,
          query: {
            country,
            searchTerm: debounceOptions.searchTerm,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [router, country, debounceOptions]);

  return (
    <>
      <Typography variant="h4">
        Search top news from {getCountryDisplayName(country)} by term:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ minWidth: 300, maxWidth: 600, width: '100%' }}
          value={queryOptions.searchTerm}
          onChange={(e) => setQueryOptions({ searchTerm: e.target.value })}
        />
      </Box>
      <Typography variant="h6">Results:</Typography>
      <NewsItemCollection
        articles={data?.articles}
        isLoading={isLoading || !country}
        skeletonCount={4}
      />
    </>
  );
};
