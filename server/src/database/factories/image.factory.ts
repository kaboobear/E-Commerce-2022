import { Image } from 'database/entity/Image';
import { setSeederFactory } from 'typeorm-extension';

export const ImageFactory = setSeederFactory(Image, (faker) => {
  const image = new Image();
  image.url =
    'http://cdn.shopify.com/s/files/1/0593/0480/4531/products/IPHONE121_COLOR-PURPLE_CAPACITY-ALL.png';

  return image;
});
