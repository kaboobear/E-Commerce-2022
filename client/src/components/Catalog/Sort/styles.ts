import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

const sortIconOffset = 'calc(50% - 82px)';
const sortIconOffsetMobile = 'calc(50% - 74px)';

export const productSort: SxProps<Theme> = {
  width: [1, 1, 1, 'auto'],
  fontSize: [14, 16],
  '& .MuiSelect-iconStandard': {
    right: 'unset',
    left: [sortIconOffsetMobile, sortIconOffset, sortIconOffset, 0],
    transform: 'none',
    color: (theme) => theme.palette.text.primary,
  },
  '& .MuiSelect-standard': {
    fontWeight: [700, 700, 700, 600],
    pr: '0 !important',
    pt: 1,
    pb: 1,
    pl: 3.5,
    '&:focus': {
      background: 'none',
    },
  },
};
