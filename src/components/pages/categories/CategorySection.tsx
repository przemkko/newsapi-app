import { Typography, useTheme } from '@mui/material';
import { NewsCategory } from '../../../types';
import { useNewsQuery } from '../../../hooks/query/news';
import { useCountry } from '../../../hooks/params';
import { useMemo, useState } from 'react';
import { TopNewsOptions } from '../../../api/news';
import { NewsItem } from '../../news-item';
import { Carousel } from '../../carousel';
import { TOP_CATEGORIES_ITEM_COUNT } from '../../../constants';
import { NewsItemSkeleton } from '../../news-item/skeleton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { NewsItemCollection } from '../../news-item/collection';
import Button from '@mui/material/Button';

interface CategorySectionProps {
  category: NewsCategory;
}

export const CategorySection = ({ category }: CategorySectionProps) => {
  const [expanded, setExpanded] = useState(false);
  const country = useCountry();
  const options = useMemo(
    (): TopNewsOptions => ({
      category: category.key,
      pageSize: TOP_CATEGORIES_ITEM_COUNT,
    }),
    [category]
  );
  const { isLoading, data } = useNewsQuery(country, options);
  const theme = useTheme();
  return (
    <>
      <Button
        onClick={() => setExpanded((current) => !current)}
        sx={{ color: 'black' }}
      >
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {category.name}
        </Typography>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>

      {!expanded && (
        <Carousel itemWidth={theme.app.newsCardMaxWidth}>
          {(isLoading || !country) &&
            new Array(TOP_CATEGORIES_ITEM_COUNT)
              .fill(undefined)
              .map((_, index) => <NewsItemSkeleton key={index} />)}
          {data?.articles.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
        </Carousel>
      )}
      {expanded && (
        <NewsItemCollection
          articles={data?.articles}
          isLoading={isLoading}
          skeletonCount={TOP_CATEGORIES_ITEM_COUNT}
        />
      )}
    </>
  );
};
