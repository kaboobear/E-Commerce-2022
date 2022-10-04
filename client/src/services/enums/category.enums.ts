export enum Category {
  PHONE = 'phone',
  LAPTOP = 'laptop',
  TABLET = 'tablet',
  HEADPHONES = 'headphones',
  WATCH = 'watch',
}

export const CategoryLabels = {
  [Category.PHONE]: 'Phone',
  [Category.LAPTOP]: 'Laptop',
  [Category.TABLET]: 'Tablet',
  [Category.HEADPHONES]: 'Headphones',
  [Category.WATCH]: 'Watch',
};

export const CategoryKeys = Object.keys(Category).filter(
  (value) => !(parseInt(value) >= 0),
) as Array<keyof typeof Category>;
