import { styled } from '@mui/material';

export const CounterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1, 3),
  border: '1px solid',
  borderRadius: 40,
}));
