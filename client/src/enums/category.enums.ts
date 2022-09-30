export enum Category {
  PHONE,
  LAPTOP,
  TABLET,
  HEADPHONES,
  WATCH,
}

export const CategoryKeys = Object.keys(Category).filter(
  (value) => !(parseInt(value) >= 0)
) as Array<keyof typeof Category>;

export const CategoryName = {
  [Category.PHONE]: "Phone",
  [Category.LAPTOP]: "Laptop",
  [Category.TABLET]: "Tablet",
  [Category.HEADPHONES]: "Headphones",
  [Category.WATCH]: "Watch",
};
