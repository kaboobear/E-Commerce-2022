import { Typography, Box } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { Color } from 'services/types/Color';
import { isNull } from 'services/utils/is-null-or-undefined';
import { colorItem, colorItemWrapper } from './styles';

interface Props {
  colors: Color[];
  selectedColor: Color | null;
  setSelectedColor: (d: Color) => void;
}

export const Colors: FC<Props> = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  useEffect(() => {
    if (isNull(selectedColor)) {
      setSelectedColor(colors[0]);
    }
  }, [selectedColor, setSelectedColor, colors]);

  const handleColorChange = (color: Color) => {
    if (color.id !== selectedColor?.id) {
      setSelectedColor(color);
    }
  };

  if (isNull(selectedColor)) {
    return null;
  }

  return (
    <>
      <Typography variant="body1" color="text.secondary" mb={1}>
        Colors:
      </Typography>
      <Box display="flex">
        {colors.map((item) => (
          <Box
            key={item.id}
            sx={colorItemWrapper(item.id === selectedColor.id)}
            onClick={() => handleColorChange(item)}
          >
            <Box sx={colorItem(item.code)} />
          </Box>
        ))}
      </Box>
    </>
  );
};
