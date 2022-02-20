import { Article } from '../../api/types';
import { NewsItemSkeleton } from './skeleton';
import { NewsItem } from './index';
import { Box } from '@mui/material';

interface NewsItemCollectionProps {
  articles?: Article[];
  multiline?: boolean;
  isLoading?: boolean;
  skeletonCount?: number;
}

export const NewsItemCollection = ({
  articles = [],
  multiline = true,
  isLoading = false,
  skeletonCount = 4,
}: NewsItemCollectionProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: multiline ? 'wrap' : 'nowrap',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
    >
      {isLoading &&
        new Array(skeletonCount)
          .fill(undefined)
          .map((_, index) => <NewsItemSkeleton key={index} />)}
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </Box>
  );
};
