import { Box, Button, Divider, Drawer, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Sort } from 'services/enums/sort.enum';
import { HideUpLg } from 'services/utils/show-and-hide/hide-up-lg';
import { ShowUpLg } from 'services/utils/show-and-hide/show-up-lg';
import TuneIcon from '@mui/icons-material/Tune';
import { SortSelector } from '../Sort/Sort';
import { Filters } from './Filters';
import {
  filterButtonContent,
  filterSortSectionButton,
  filterSortSectionWrapper,
  sectionVerticalDivider,
} from './styles';
import { useToggleDrawer } from 'services/hooks/use-toggle-drawer';

interface Props {
  setSort: (sort: Sort) => void;
  sort: Sort;
}

export const FiltersSortSection: FC<Props> = ({ sort, setSort }) => {
  const { open, toggleDrawer } = useToggleDrawer();

  return (
    <>
      <ShowUpLg>
        <Filters />
      </ShowUpLg>
      <HideUpLg>
        <Box sx={filterSortSectionWrapper}>
          <Box width={1}>
            <Button
              sx={filterSortSectionButton}
              variant="text"
              children={<SortSelector sort={sort} setSort={setSort} />}
            />
          </Box>
          <Divider orientation="vertical" sx={sectionVerticalDivider} />
          <Box width={1}>
            <Button
              sx={filterSortSectionButton}
              onClick={toggleDrawer(true)}
              variant="text"
              children={
                <Box sx={filterButtonContent}>
                  <TuneIcon sx={{ mr: 1 }} />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, fontSize: [14, 16] }}
                    color="text.primary"
                  >
                    Filter
                  </Typography>
                </Box>
              }
            />
          </Box>
        </Box>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Filters close={toggleDrawer(false)} />
        </Drawer>
      </HideUpLg>
    </>
  );
};
