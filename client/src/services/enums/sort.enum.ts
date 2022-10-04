export enum Sort {
  DATE_ASC = 'date_old_to_new',
  DATE_DESC = 'date_new_to_old',
  PRICE_ASC = 'price_low_to_high',
  PRICE_DESC = 'price_high_to_low',
}

export const SortLabels = {
  [Sort.DATE_DESC]: 'Date - New to Old',
  [Sort.DATE_ASC]: 'Date - Old to New',
  [Sort.PRICE_DESC]: 'Price - High to Low',
  [Sort.PRICE_ASC]: 'Price - Low to High',
};

export const SortDefaultValue = Sort.DATE_DESC;
