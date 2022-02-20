import Typography from '@mui/material/Typography';
import { useQueryClient } from 'react-query';
import { useArticleId } from '../../../hooks/params';
import { useMemo } from 'react';
import { Box } from '@mui/material';
import { Article } from '../../../api/types';
import Button from '@mui/material/Button';

export const SingleNewsContent = () => {
  const articleId = useArticleId();
  const queryClient = useQueryClient();
  const article = useMemo(() => {
    return queryClient.getQueryData(['article', articleId]) as
      | Article
      | undefined;
  }, [queryClient, articleId]);

  if (!article) {
    return <Box>Sorry, there not such article</Box>;
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {article.title}
      </Typography>
      {/* Images are coming from different domains so next optimisation is not useful here */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.urlToImage}
        alt="headline image"
        style={{ maxHeight: 500, width: '100%', objectFit: 'cover' }}
      />
      <Typography variant="body1" sx={{ mt: 3 }}>
        {article.content}
      </Typography>
      <Button sx={{ mt: 3 }} onClick={() => history.back()}>
        Go Back
      </Button>
    </Box>
  );
};
