import { Box, Select, MenuItem } from "@mui/material";
import { Sort, SortName } from "features/filters/types/sort.interface";
import React, { FC } from "react";
import SortIcon from "@mui/icons-material/Sort";

interface Props {
  setSort: (sort: Sort) => void;
  sort: Sort;
}

export const SortSelector: FC<Props> = ({ sort, setSort }) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ height: 60 }}
    >
      <Box display="flex" alignItems="center">
        <SortIcon sx={{ pr: 0.5 }} />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="standard"
          value={sort}
          disableUnderline
          onChange={(event) => setSort(event.target.value as Sort)}
          sx={{
            "& .MuiSelect-standard": {
              pl: 0.5,
              background: "none",
            },
          }}
        >
          {Object.entries(SortName).map(([value, name]) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};
