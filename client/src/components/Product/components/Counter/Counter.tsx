import { IconButton, InputBase } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import React, { FC } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import { CounterWrapper } from './styles';

interface Props {
  quantity: number;
  setQuantity(quantity: number): void;
}

export const Counter: FC<Props> = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <CounterWrapper>
      <IconButton
        onClick={handleDecrement}
        color="primary"
        disabled={quantity === 1}
      >
        <RemoveIcon />
      </IconButton>

      <InputBase
        value={quantity}
        sx={{ flex: 1 }}
        inputProps={{
          style: { textAlign: 'center' },
          disabled: true,
        }}
      />

      <IconButton onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </CounterWrapper>
  );
};
