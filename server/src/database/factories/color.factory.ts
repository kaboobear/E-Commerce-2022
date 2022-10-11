import { Color } from 'database/entity/Color';
import { setSeederFactory } from 'typeorm-extension';

export const ColorFactory = setSeederFactory(Color, (faker) => {
  const color = new Color();
  color.title = 'black';
  color.code = '#000';

  return color;
});
