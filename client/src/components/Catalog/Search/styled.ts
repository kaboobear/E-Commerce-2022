import { InputBase, styled } from '@mui/material';

export const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderBottom: '1px solid #ccc',
  marginLeft: 0,
  width: '100%',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  paddingRight: theme.spacing(1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(4),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
