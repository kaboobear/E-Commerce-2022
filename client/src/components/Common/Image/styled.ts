import { styled } from '@mui/material';

interface BaseImageProps {
  loaded: boolean;
  transition: boolean;
}

export const BaseImage = styled('img')<BaseImageProps>((props) => ({
  display: 'block',
  objectFit: 'cover',

  ...(props.transition && {
    transition: 'opacity cubic-bezier(0.4, 0.0, 0.2, 1) 500ms  300ms',
    opacity: 0,
  }),
  ...(props.loaded && {
    opacity: 1,
  }),
}));
