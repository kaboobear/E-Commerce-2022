export enum Price {
  RANGE_ONE,
  RANGE_TWO,
  RANGE_THREE,
  RANGE_FOUR,
  RANGE_FIVE,
}

export const PriceKeys = Object.keys(Price).filter(
  (value) => !(parseInt(value) >= 0)
) as Array<keyof typeof Price>;

export const PriceName = {
  [Price.RANGE_ONE]: "Under $100",
  [Price.RANGE_TWO]: "$100 - 500$",
  [Price.RANGE_THREE]: "$500 - $1000",
  [Price.RANGE_FOUR]: "$1000 - $2500",
  [Price.RANGE_FIVE]: "$2500+",
};

export const PriceValues = {
  [Price.RANGE_ONE]: "0-100",
  [Price.RANGE_TWO]: "100-500",
  [Price.RANGE_THREE]: "500-1000",
  [Price.RANGE_FOUR]: "1000-2500",
  [Price.RANGE_FIVE]: "2500",
};
