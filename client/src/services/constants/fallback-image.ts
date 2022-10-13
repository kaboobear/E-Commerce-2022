import { ImageType } from 'services/types/Image';
import DefaultImage from 'assets/images/default.jpeg';

export const fallbackImage: ImageType = {
  id: 0,
  url: DefaultImage,
  order: 1,
  created_at: new Date(),
  updated_at: new Date(),
};
