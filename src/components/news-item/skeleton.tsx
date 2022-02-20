import { Card, Skeleton, CardContent } from '@mui/material';

export const NewsItemSkeleton = () => {
  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        m: 1,
        flexGrow: 1,
      }}
    >
      <Skeleton animation="wave" height={200} variant="rectangular" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Skeleton animation="wave" height={30} />
        <Skeleton animation="wave" height={30} />
        <Skeleton animation="wave" height={30} />
        <Skeleton animation="wave" height={10} />
        <Skeleton animation="wave" height={10} />
        <Skeleton animation="wave" height={10} />
        <Skeleton animation="wave" height={10} width="80%" />
      </CardContent>
    </Card>
  );
};
