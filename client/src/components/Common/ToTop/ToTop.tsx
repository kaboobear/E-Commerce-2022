import { Box, Fab, Zoom } from '@mui/material';
import React, { FC } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { toTop } from './styles';

export const ToTop: FC = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 500 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box role="presentation" sx={toTop}>
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};
