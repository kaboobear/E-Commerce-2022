import { styled } from '@mui/material';

export const CounterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1, 1.5),
  border: '1px solid',
  borderRadius: 40,
}));
