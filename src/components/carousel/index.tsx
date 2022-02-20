import React, { Children, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useResizeDetector } from 'react-resize-detector';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface CarouselProps {
  itemWidth: number;
  children: React.ReactNode;
}

export const Carousel = ({ itemWidth, children }: CarouselProps) => {
  const childrenArray = Children.toArray(children);
  const { width, ref } = useResizeDetector();
  const itemsToDisplay = Math.max(1, Math.floor((width ?? 0) / itemWidth));
  const [indexOffset, setIndexOffset] = useState(0);

  useEffect(() => {
    setIndexOffset((current) => {
      if (current > childrenArray.length - current - itemsToDisplay) {
        return childrenArray.length - itemsToDisplay;
      }
      return current;
    });
  }, [itemsToDisplay, childrenArray.length]);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        px: 3,
      }}
    >
      {indexOffset !== 0 && (
        <IconButton
          aria-label="back"
          sx={{
            position: 'absolute',
            left: -10,
            height: '100%',
          }}
          onClick={() => setIndexOffset((current) => current - 1)}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      {childrenArray.slice(indexOffset, indexOffset + itemsToDisplay)}
      {indexOffset + itemsToDisplay < childrenArray.length && (
        <IconButton
          aria-label="back"
          sx={{
            position: 'absolute',
            right: -10,
            height: '100%',
          }}
          onClick={() => setIndexOffset((current) => current + 1)}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </Box>
  );
};
