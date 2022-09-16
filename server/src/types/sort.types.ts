export enum Sort {
  DATE_ASC = "date_old_to_new",
  DATE_DESC = "date_new_to_old",
  PRICE_ASC = "price_low_to_high",
  PRICE_DESC = "price_high_to_low",
}

export const SortValues = {
  [Sort.DATE_ASC]: { column: "createdAt", order: "ASC" },
  [Sort.DATE_DESC]: { column: "createdAt", order: "DESC" },
  [Sort.PRICE_ASC]: { column: "price", order: "ASC" },
  [Sort.PRICE_DESC]: { column: "price", order: "DESC" },
};
