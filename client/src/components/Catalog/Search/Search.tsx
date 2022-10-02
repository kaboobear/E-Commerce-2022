import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import { SearchWrapper, SearchIconWrapper, StyledInputBase } from './styled';

interface Props {
  value: string;
  setValue: (text: string) => void;
}

export const Search: FC<Props> = ({ value, setValue }) => {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchWrapper>
  );
};
