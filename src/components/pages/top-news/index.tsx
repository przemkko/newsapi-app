import { useCountry } from '../../../hooks/params';
import { useNewsQuery } from '../../../hooks/query/news';
import Typography from '@mui/material/Typography';
import { getCountryDisplayName } from '../../../constants';
import { NewsItem } from '../../news-item';
import { Box } from '@mui/material';
import { NewsItemSkeleton } from '../../news-item/skeleton';

export const TopNewsContent = (): JSX.Element => {
  const country = useCountry();
  const { data, isLoading } = useNewsQuery(country);
  console.log(data);
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Top news from {getCountryDisplayName(country)}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        {(isLoading || !country) &&
          new Array(20)
            .fill(undefined)
            .map((_, index) => <NewsItemSkeleton key={index} />)}
        {data?.articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </Box>
    </div>
  );
};