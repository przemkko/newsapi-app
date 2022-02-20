import { useCountry } from '../../../hooks/params';
import { useNewsQuery } from '../../../hooks/query/news';
import Typography from '@mui/material/Typography';
import { getCountryDisplayName } from '../../../constants';
import { NewsItemCollection } from '../../news-item/collection';

export const TopNewsContent = (): JSX.Element => {
  const country = useCountry();
  const { data, isLoading } = useNewsQuery(country);
  console.log(data);
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Top news from {getCountryDisplayName(country)}
      </Typography>
      <NewsItemCollection
        articles={data?.articles}
        isLoading={isLoading || !country}
        skeletonCount={20}
      />
    </div>
  );
};
