import { Box, SxProps, Theme } from '@mui/material';
import React, { FC, ImgHTMLAttributes, useState } from 'react';
import { BaseImage } from './styled';
import { imageWrapper } from './styles';
import DefaultImage from 'assets/images/default.jpeg';

type Props = {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
  transition?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Image: FC<Props> = ({
  src,
  alt,
  sx,
  transition = false,
  ...props
}) => {
  const [error, setError] = useState<boolean>(!src.length);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (src) {
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Box sx={imageWrapper}>
      <BaseImage
        src={error ? DefaultImage : src}
        sx={sx}
        alt={alt}
        height={props.height ?? '100%'}
        width={props.height ?? '100%'}
        loaded={loaded}
        transition={transition}
        onError={handleError}
        onLoad={handleLoad}
      />
    </Box>
  );
};
