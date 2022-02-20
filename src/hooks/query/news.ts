import { useQuery, useQueryClient } from 'react-query';
import { getTopNews, TopNewsOptions } from '../../api/news';

export const useNewsQuery = (
  country: string | undefined,
  options: TopNewsOptions = {}
) => {
  const queryClient = useQueryClient();
  return useQuery(
    [
      'top-headlines',
      country,
      options.category,
      options.searchTerm,
      options.pageSize,
    ],
    () => getTopNews(country!, options),
    {
      enabled: !!country,
      onSuccess(data) {
        data.articles.forEach((article) => {
          queryClient.setQueryData(['article', article.id], article);
        });
      },
    }
  );
};
