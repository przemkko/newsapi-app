import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { Article } from '../../api/types';
import NewsPlaceholderImage from '../../../public/news-placeholder.png';
import { useCountry } from '../../hooks/params';

interface NewsItemProps {
  article: Article;
}

export const NewsItem = ({ article }: NewsItemProps): JSX.Element => {
  const country = useCountry();
  return (
    <Card
      sx={{
        maxWidth: (theme) => theme.app.newsCardMaxWidth,
        m: 1,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={article.urlToImage ?? NewsPlaceholderImage.src}
        alt={article.title}
        height={200}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          href={{
            pathname: '/[country]/news',
            query: {
              articleId: article.id,
              country,
            },
          }}
          passHref
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
