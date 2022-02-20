import { useCountry } from '../../../hooks/params';
import { useTopHeadlines } from '../../../hooks/query/news';

export const TopNewsContent = (): JSX.Element => {
  const country = useCountry();
  const { data } = useTopHeadlines(country);
  console.log(data);
  return <h1>Top news! {data?.articles.length}</h1>;
};
