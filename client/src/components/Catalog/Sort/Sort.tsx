import { Select, MenuItem } from '@mui/material';
import { Sort, SortLabels } from 'services/enums/sort.enum';
import React, { FC } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import { productSort } from './styles';

interface Props {
  setSort: (sort: Sort) => void;
  sort: Sort;
}

export const SortSelector: FC<Props> = ({ sort, setSort }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      variant="standard"
      value={sort}
      disableUnderline
      onChange={(event) => setSort(event.target.value as Sort)}
      sx={productSort}
      IconComponent={SortIcon}
    >
      {Object.entries(SortLabels).map(([value, name]) => (
        <MenuItem key={value} value={value}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};
