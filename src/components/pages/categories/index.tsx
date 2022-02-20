import { Box, Typography } from '@mui/material';
import { useCountry } from '../../../hooks/params';
import { getCountryDisplayName, TOP_CATEGORIES } from '../../../constants';
import { CategorySection } from './CategorySection';

export const CategoriesContent = () => {
  const country = useCountry();
  return (
    <>
      <Typography variant="h4">
        Top 5 news by categories from {getCountryDisplayName(country)}
      </Typography>
      <Box>
        {TOP_CATEGORIES.map((category) => (
          <CategorySection key={category.key} category={category} />
        ))}
      </Box>
    </>
  );
};
