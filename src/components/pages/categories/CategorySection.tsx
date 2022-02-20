import { Typography, useTheme } from '@mui/material';
import { NewsCategory } from '../../../types';
import { useNewsQuery } from '../../../hooks/query/news';
import { useCountry } from '../../../hooks/params';
import { useMemo } from 'react';
import { TopNewsOptions } from '../../../api/news';
import { NewsItem } from '../../news-item';
import { Carousel } from '../../carousel';
import { TOP_CATEGORIES_ITEM_COUNT } from '../../../constants';
import { NewsItemSkeleton } from '../../news-item/skeleton';

interface CategorySectionProps {
  category: NewsCategory;
}

export const CategorySection = ({ category }: CategorySectionProps) => {
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
      <Typography variant="h6">{category.name}</Typography>
      <Carousel itemWidth={theme.app.newsCardMaxWidth}>
        {(isLoading || !country) &&
          new Array(TOP_CATEGORIES_ITEM_COUNT)
            .fill(undefined)
            .map((_, index) => <NewsItemSkeleton key={index} />)}
        {data?.articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </Carousel>
    </>
  );
};
